***rodar em dispositivo real

***criar diretorio do app

>no terminal ir ate caminho desejado apos isso

	react-native init nomeapp

>obs=> para criar um projeto em versoes mais antigas e usar numero da versao desejada

	react-native init --version="0.44.0" <nome_do_app>

>dentro do diretorio do app instalar pacote com regras para validação dos códigos javascript. Comando:

	npm install --save-dev eslint-config-rallycoding

>apos isso no android studio ir em abrir pojeto ja existentem ir ate o direitorio abrir a pasta android com isso o android studio vai verificar o projeto e se falta algo instalar

--------------------------------------------------------------------------

	adb reverse tcp:8081 tcp:8081

	react-native run-android 

>abrir outro terminal ir na pasta raiz do projeto

	adb shell input keyevent 82

--------------------------------------------------------------------------

***comando para inciar app ja instalado 

>no terminal dentro da pasta raiz

	react-native start 

--------------------------------------------------------------------------

>caso o comando: react-native run-android 
nao funcione dentro do diretorio raiz do projeto

cd android

	gradlew assembleDebug

>com isso é gerado apk no diretorio do projeto em
/android/app/build/ouputs/apk/debug

>dentro do diretorio raiz do projeto iniciar o react com comando

	react-native start

>inicia a ponte entre adb e o dispositivo com comando

	adb reverse tcp:8081 tcp:8081

>dentro do diretorio apk criado em /android/app/build/ouputs/apk/debug

	adb install app-debug.apk

--------------------------------------------------------------------------

***comandos para resfresh

>resfresh dentro do diretorio apk criado

	adb shell input keyevent 46 46

>resfresh apos tela de erro 

	adb reverse tcp:8081 tcp:8081

	adb shell input keyevent 46 46

>crtl+n
 
	adb shell input keyevent 82

--------------------------------------------------------------------------

***React native ERROR Packager can't listen on port 8081

>Terminal e digite

	fuser 8081/tcp

>Você receberá um ID do processo que está usando a porta 8081 Agora, mate o processo

	kill <pid>

--------------------------------------------------------------------------

***permissoes do dispositivo

A correção foi habilitar tanto 'debug over USB' quanto 'connect as MTP'. 

O oposto é verdadeiro quando se usa o mesmo dispositivo e o Android Studio e adb no OSX - para permitir que o Android Studio reconheça o aparelho, eu preciso desabilitar 'conectar como MTP'.

--------------------------------------------------------------------------

***limpa cache do android studio

>Terminal do Android studio

	./gradlew cleanBuildCache

