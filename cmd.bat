@echo off
rem cd /d C:\Users\Administrator\bin\Sencha\Cmd\6.1.3.42
rem cd /d C:\Users\Administrator\bin\Sencha\Cmd\6.2.0.103
rem cd /d C:\Users\Administrator\bin\Sencha\Cmd\6.2.1.29
rem cd /d C:\Users\Administrator\bin\Sencha\Cmd\6.5.0.180


echo CRM 菜单命令：

:开始
echo	--------------------------------------------------------------------------
echo　　0　Development
echo	--------------------------------------------------------------------------
echo　　1　Refresh-All
echo　　2　Refresh-Classic
echo　　3　Refresh-Modern
echo	--------------------------------------------------------------------------
echo　　4　Build-All
echo　　5　Build-Classic
echo　　6　Build-Modern
echo	--------------------------------------------------------------------------



echo.


set /p n=输入指令：
call :%n% ""
goto 开始


:0
sencha app build development
goto :eof

:1
sencha app refresh

goto :eof

:2
sencha app refresh classic
goto :eof

:3
sencha app refresh modern
goto :eof

:4
sencha app build production

goto :eof

:5
sencha app build classic
goto :eof

:6
sencha app build modern
goto :eof
