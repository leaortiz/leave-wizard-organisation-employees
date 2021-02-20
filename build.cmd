IF NOT EXIST "%CD%\Output\" (
    MKDIR "%CD%\Output\" 2>nul
    IF ERRORLEVEL 1 GOTO ERROR
)

set Deploy_Name=site.OrganisationEmployees
set Deploye_Output=Output\InetPub\wwwroot\site.OrganisationEmployees

set version=%3.%4.%1
echo %version%>Lastversion.txt
copy .\Lastversion.txt .\Output\version.txt
if errorlevel 1 goto ERROR

call npm install
if errorlevel 1 goto ERROR
call npm run build

call npm install
if errorlevel 1 goto ERROR
call npm run build:uat
xcopy /F /S /Y build\*.* %Deploye_Output%\uat\ 2>nul
call npm install
if errorlevel 1 goto ERROR
call npm run build:prd
xcopy /F /S /Y build\*.* %Deploye_Output%\prd\ 2>nul
if errorlevel 1 goto ERROR

@echo ***************************
@echo ****COPY VERSION FILES*****
@echo ***************************

copy LastVersion.txt %Deploye_Output%\uat\Version.txt
copy LastVersion.txt %Deploye_Output%\prd\Version.txt
if errorlevel 1 goto ERROR

@echo ***************************
@echo Build Completed Succesfully
@echo ***************************

:ERROR
@echo ***************************
@echo ********BUILD ERROR********
@echo ***************************