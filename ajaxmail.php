<?php
$un=$_POST['username'];
$em=$_POST['useremail'];
$su=$_POST['useresubject'];
$msg=$_POST['mesg'];
if(trim($un)!="" && trim($msg)!="" && trim($em)!="" && trim($su)!="")
{
	if(filter_var($em, FILTER_VALIDATE_EMAIL))
	{
		$message="Hi Admin..<p>".$un." has sent a query having subject ".$su." and email id as ".$em."</p><p>Query is : ".$msg."</p>";
		$headers = "MIME-Version: 1.0" . "\r\n";
		$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
		$headers .= 'From: Holiday House' . "\r\n";

		if(mail('hoopsek20@yandex.ru','Query for Beauty Salon',$message,$headers ))
		{
		echo '1#<p class="msg_show_green">Заявка Успешно Отправлена.</p>';
		}
		else
		{
		echo '2#<p class="msg_show_red">Пожалуйста, Повторите Ещё Раз</p>';
		}
	}
	else
		echo '2#<p class="msg_show_red">Пожалуйста,Проверьте Правильность Ввода.</p>';
}
else
{
echo '2#<p class="msg_show_red">Пожалуйста, Проверьте Все Детали.</p>';
}?>