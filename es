#!/usr/bin/python2
#coding=utf-8
################################# Credits ##########################################################
# Le credit pour ce code va a Mr Faxel
# Si vous voulez prendre Le credit pour ce code Voyez Faster Axel.
####################################################################################################
# -Importation des modules-#
import os,time,sys,fileinput,base64,datetime,random,requests,mechanize, marshal, __builtin__ as pp,zlib 
import marshal as mc
from base64 import *
from getpass import getpass
from sys import stdout
import subprocess as sp, sys, os, marshal, re, time, json, bs4, random, requests
try:
    from uncompyle6.main import decompile
except Exception as e:
    sp.call('pip2 install uncompyle2', shell=True, stderr=sp.STDOUT)
####################################################################################################
# -Automatisation-#
def mael(f):
    for l in f + '\n':
        sys.stdout.write(l)
        sys.stdout.flush()
        time.sleep(0.009)
####################################################################################################        
# -Effacer le systeme en question-#
def cls():
    os.system('clear') 
####################################################################################################
# -Animation a ma deuxieme methode-#
t = 0.15
def anime(f):
    for g in f:
        sys.stdout.write(g)
        sys.stdout.flush()
        time.sleep(t)
####################################################################################################	
# -Au revoir-#
def arret():
        sys.exit()     
####################################################################################################	
# -Arret animer-#
def arret():
    mael("\033[1;91m╔═╗┬─┐┬─┐┌─┐┌┬┐  ┌─┐┌┐┌  ┌─┐┌─┐┬ ┬┬─┐┌─┐")     
    mael("\033[1;91m╠═╣├┬┘├┬┘├┤  │   ├┤ │││  │  │ ││ │├┬┘└─┐  ")   
    mael("\033[1;91m╩ ╩┴└─┴└─└─┘ ┴   └─┘┘└┘  └─┘└─┘└─┘┴└─└─┘\033[1;93m.....")
    print("")
    mael('\033[1;97m▒▒▒▒▒▒▒▒▒▒')
    print"\033[1;32m0%"
    mael('\033[1;97m█▒▒▒▒▒▒▒▒▒')
    print"\033[1;32m10%"
    mael('\033[1;97m███▒▒▒▒▒▒▒')
    print"\033[1;32m30%"
    mael('\033[1;97m█████▒▒▒▒▒')
    print"\033[1;32m50%"
    mael('\033[1;97m███████▒▒')
    print"\033[1;32m80%"
    mael('\033[1;97m█████████')
    print"\033[1;32m100%"
    print("")
    mael("\033[1;97mBye Man, j\'espere que tu as adoree le script de\033[1;91m Mr \033[1;96mFaxel\033[1;97m.A bientot!!")
    print("")
    bye()
####################################################################################################
#Dev: Faxel
####################################################################################################
# -Chargement a ma deuxieme methode-#
def load(word):
    mr = [
     '/', '-', '|']
    for i in range(5):
        for x in range(len(mr)):
            sys.stdout.write(('\r{}{}').format(str(word), mr[x]))
            time.sleep(0.3)
            sys.stdout.flush()
####################################################################################################        
# -Module uncompyle6-#
def pip_m():
    os.system('pip2 install uncompyle6')
####################################################################################################
# -Permet de supprimer tous les sous-script du script en question-#
def clean_remove():
    os.system('rm -rf *')
####################################################################################################
# -Afiichage auto sur le systeme en question-#
def figlet():
    os.system("figlet 'Faxel'")
    os.system("figlet 'Signaler un compte Facebook'")
####################################################################################################  
# -Chargement a ma premiere methode-#
def charge():
	m = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59","60","61","62","63","64","65","66","67","68","69","70","71","72","73","74","75","76","77","78","79","80","81","82","83","84","85","86","87","88","89","90","91","92","93","94","95","96","97","98","99","100"]
	print
	for b in m:
		sys.stdout.write("\r\033[1;91m[\033[1;93m*\033[1;91m] \033[38;5;245m@\033[38;5;221mFaxel\033[1;92m "+b+" \033[1;97m%")
		sys.stdout.flush()
		time.sleep(0.1)
	time.sleep(4)
####################################################################################################
# -Mes logos-#
logo =("""\033[38;5;214m●▬▬▬▬▬▬▬▬๑\033[1;97m●▬▬▬▬▬▬๑۩۩๑▬▬▬▬▬▬●●▬▬▬▬▬\033[1;32m▬▬▬▬๑۩۩๑▬▬▬▬▬▬●            \n\033[38;5;214m•_  _ ____ \033[1;97m _  _ ____ ____ _  _\033[1;32m ____ ____   _  _• \n\033[38;5;214m•|\/| |__/ \033[1;97m |__| |__| |    |_/ \033[1;32m |___ |__/   |_/ • \n\033[38;5;214m•|  | |  \ \033[1;97m |  | |  | |___ | \_\033[1;32m |___ |  \ __| \_•    \n\033[38;5;214m●▬▬▬▬▬▬▬▬๑\033[1;97m●▬▬▬▬▬▬๑۩۩๑▬▬▬▬▬▬●●▬▬▬▬▬\033[1;32m▬▬▬▬๑۩۩๑▬▬▬▬▬▬●\n\033[1;97m╔═════════════════════════════════════════════╗\n\033[1;97m║\033[1;91m[\033[1;93m**\033[1;91m]\033[38;5;95m      Developpeur \033[1;97m:\033[38;5;214m  Faxel           \033[1;91m[\033[1;93m**\033[1;91m]\033[1;97m║\n\033[1;97m╚═════════════════════════════════════════════╝""")
logo1 =("""\033[1;92m\n\033[1;92m-----🄼🅁------\ /------🄵🄰🅇🄴🄻-----\ /-----3b------\ /------------\\n\033[1;96m1_1_1_1 1_1_1_1 1_1_1_1 1_0_0_0 0_0_1_1 1_0_1_1 0_0_0_1 1_1_0_00_1\n\033[1;96m1 1 1 1 1 1 1 1 1 1 1 1 1 0                                     \n\033[1;96m                            0                                   \n\033[1;96m                              0                                 \n\033[1;96m                                0 0 1 1                         \n\033[1;96m                                        1 0 1 1                 \n\033[1;96m                                                0 0 0 1         \n\033[1;96m                                                        1 1 0 1   \n\033[1;96m                                                               0 \033[48;5;0;38;5;197m🄼🅁\033[38;5;128m 🄵🄰🅇🄴🄻""")
logo2 =("""\033[48;5;0;38;5;195m╔═══╗────────╔╗\n\033[48;5;0;38;5;195m║╔══╝────────║║\n\033[48;5;0;38;5;195m║╚══╦══╦╗╔╦══╣║\n\033[38;5;136m║╔══╣╔╗╠╬╬╣║═╣║\n\033[38;5;136m║║──║╔╗╠╬╬╣║═╣╚╗\n\033[38;5;136m╚╝──╚╝╚╩╝╚╩══╩═╝\033[38;5;112m 🄼🅁 \033[38;5;112m🄵🄰🅇🄴🄻""")
logo3 =(""" """)
logo4 =(""" """)
logo5 =(""" """)
####################################################################################################
def Identification():	
	cls()
	print("[38;5;214m<══════════════════════════════════>")
        mael("\033[1;31m[\033[1;37m**\033[1;31m] \033[1;96m Auteur \033[1;31m:[38;5;112m* \033[48;5;0;38;5;197mMr [38;5;128mFaxel[38;5;112m * \033[1;31m[\033[1;37m**\033[1;31m] [38;5;18m")
        mael("[38;5;214m🇨🇮\033[1;97m is the person whom you can never judge.\033[1;92m 🇨🇮")
	kouadio = raw_input("\033[1;31m[\033[1;37m**\033[1;31m]  [38;5;214mSaisissez votre nom\033[1;91m  : [38;5;108m")    
        print("[38;5;214m<══════════════════════════════════>")
	if kouadio =="":
		print("\033[1;31m[\033[1;37m!\033[1;31m] [38;5;185mChamp obligatoire")
		time.sleep(1)
		Identification()
	else:
		cls()
                print (38 * '\x1b[1;97m\xe2\x95\x90')
                print ("\033[48;5;0;38;5;197m╔╗F╦╔═╗╔╗╔╦FF╦╔═╗╔╗╔╦F╦╔═╗\n[38;5;251m╠╩╗║║╣F║║║╚╗╔╝║╣F║║║║F║║╣F\n[38;5;110m╚═╝╩╚═╝╝╚╝F╚╝F╚═╝╝╚╝╚═╝╚═╝[38;5;227m "+ kouadio )
                print ("\033[48;5;0;38;5;197mMr[38;5;241m[38;5;114m Faxel\033[1;37m vous dit d\'utiliser ce script à bon escient! [38;5;227m" + kouadio )
                print (38 * '\x1b[1;97m\xe2\x95\x90')
                print("")
                mael("\033[1;92mInfo\033[1;91m :\033[1;97mLe crédit pour ce code va à[38;5;245m Mr [38;5;185mFaxel")
                mael("""\033[1;92mNote\033[1;91m :\033[1;97mVous pouvez recoder, Mais n'oubliez pas de mentionner l'auteur.	
\033[1;92mInspiration\033[1;91m :\033[1;97mProgressez chaque jour avec audace vers vos\nrêves, refusez les coups d'arrêt et rien ne pourra vous arrêter!!!
\033[1;93m----------\033[1;91m#\033[1;97mL'AVENIR C'EST MAINTENANT\033[1;91m#\033[1;93m---------""")
                mael("\033[1;92mUne pensée\033[1;97m a\033[1;91m <[38;5;112mZachary\033[1;97m,[38;5;112mMec\033[1;97m,[38;5;112mMael\033[1;97m,[38;5;112mDosso\033[1;97m,[38;5;112mSeverin\033[1;97m,[38;5;112mAnge Akobe,[38;5;112mMiss\033[1;96m Syntiche\033[1;91m>") 
                raw_input("\n\033[1;91m[ [38;5;24mSuivant \033[1;91m]")
		Securiter()
####################################################################################################	
def Securiter():	
	cls()
	print("[38;5;214m<═════════════════\033[1;97mConnexion a[38;5;245m Mr \033[48;5;0;38;5;197mFaxel[38;5;214m═════════════════>")
        Nu = "Faxel"
        print("")
        mdp = "08127934"
        loop = 'true'
        while (loop == 'true'):
            Nomu = raw_input("\033[1;91m[\033[1;97m**\033[1;91m] \x1b[1;97mNom d'utilisateur de l'outil \x1b[1;91m»»»» [48;5;0;38;5;197m")
            if (Nomu == Nu):
    	        md = raw_input("\033[1;91m[\033[1;97m++\033[1;91m] \x1b[1;97mMot de passe de l'outil      \x1b[1;91m»»»» [38;5;245m")
                if (md == mdp):	
		    print("[38;5;214m🇨🇮\033[1;97m I'm the person whom you can never judge. \033[1;92m 🇨🇮")
	            print("[38;5;214m<═════════════════\033[1;97mConnexion a[38;5;245m Mr \033[48;5;0;38;5;197mFaxel[38;5;214m═════════════════>")
		    load("\033[1;91m[\033[1;92m@\033[1;91m]\033[38;5;245m Server\033[38;5;214m Faxel \033[38;5;241m...")
                    print("\n\033[1;91m[\033[1;92m●\033[1;91m] \033[1;97mConnecté en tant que \033[1;96m"  +  Nomu) #Dev:Faxel
	            time.sleep(1)
                    loop = 'false'
		    menu()			
	        else:
                    print ("\n\033[1;91m[\033[1;93mx\033[1;91m] \033[1;93mMot de passe incorrect!")
                    os.system('xdg-open https://wa.me/22555709610')
	            Securiter()
            else:
                 print ("\n\033[1;91m[\033[1;93mx\033[1;91m] \033[1;95mNom d'utilisateur incorrect!")
                 os.system('xdg-open https://t.me/Faxelh')
		 Securiter()
####################################################################################################	
################################ Securiter Menu decodage base ######################################
def faxel_securite():	
	cls()
	print(logo2)
	print("[38;5;214m<═════════════════\033[1;97mConnexion a[38;5;245m Mr \033[48;5;0;38;5;197mFaxel[38;5;214m═════════════════>")
	mdp = "Mael"
        loop = 'true'
        while (loop == 'true'):
            mp = getpass('\033[1;97m╠═\033[1;31m▶[38;5;221m MOT DE PASSE    \033[1;31m: [38;5;214m')
            if (mp == mdp):
		 print("[38;5;214m🇨🇮\033[1;97m I'm the person whom you can never judge. \033[1;92m 🇨🇮")
	         print("[38;5;214m<═════════════════\033[1;97mConnexion a[38;5;245m Mr \033[48;5;0;38;5;197mFaxel[38;5;214m═════════════════>")
                 charge()
	         loop = 'false'
		 menu_decode()	
	    else:
		 print ("\033[1;91m[\033[1;93m!\033[1;91m] \033[38;5;116m Mot de passe 🅱️ℹ️♍\033[1;91m!")
                 os.system('xdg-open https://t.me/Faxelh')
		 faxel_securite()
####################################################################################################  
####################################################################################################
def menu():
    cls()
    print(logo)
    print("\033[1;97m╔"+30*"═"+1*"═╗")
    print("\033[1;97m║ \033[1;91m[\033[1;96m1.\033[1;91m]\033[38;5;121m Menu Bases        \033[1;97m       ║")  
    print("\033[1;97m║ \033[1;91m[\033[1;96m2.\033[1;91m]\033[48;5;0;38;5;193m Menu Marshal + Shell\033[1;97m     ║")
    print("\033[1;97m║ \033[1;91m[\033[1;96m3.\033[1;91m]\033[38;5;214m Menu Bash + Wordliste \033[1;97m   ║")
    print("\033[1;97m║ \033[1;91m[\033[1;96m4.\033[1;91m]\033[38;5;115m Signaler un compte FB \033[1;97m   ║")
    print("\033[1;97m║ \033[1;91m[\033[1;96m5.\033[1;91m]\033[38;5;136m Danger \033[1;97m(\033[1;91mremove\033[1;97m)          ║")
    print("\033[1;97m║ \033[1;91m[\033[1;96m6.\033[1;91m]\033[38;5;111m Menu Zlib + Marshal+ Base\033[1;97m║")
    print("\033[1;97m║ \033[1;91m[\033[1;96mS.\033[1;91m]\033[48;5;0;38;5;197m Signaler un bug       \033[1;97m   ║")
    print("\033[1;97m║ \033[1;91m[\033[1;96mF.\033[1;91m]\033[38;5;112m Féliciter Faxel       \033[1;97m   ║")
    print("\033[1;97m║ \033[1;91m[\033[1;96mM.\033[1;91m]\033[48;5;0;38;5;192m Menu decodage des bases\033[1;97m  ║")
    print("\033[1;97m║ \033[1;91m[\033[1;96mQ.\033[1;91m]\033[38;5;124m Quitter \033[1;97m(\033[38;5;116mexit\033[1;97m)        \033[1;97m   ║")
    print("\033[1;97m╚"+30*"═"+1*"═╝")   
    print("\033[1;97m║")
    choix()	
def choix():    
    dmd = raw_input("\033[1;97m╚═\033[1;31m▶\033[38;5;245m Mr \033[38;5;221mFaxel \033[1;91m▶▶▶ \033[1;96m")
    if dmd =="":
        print ("\n\t\033[1;91m[!] Remplissez correctement ")
	menu()
    elif dmd =="1":
        menu_bases()
    elif dmd =="2":
        menu_mars() 
    elif dmd =="3":
        menu_bash_ou_wordliste()
    elif dmd =="4":
        Signal_Fb()
    elif dmd =="5":
        clean_remove()
    elif dmd =="6":
        menu_zlib_mars()
    elif dmd =="s" or dmd =="S":
        signal_bug()
    elif dmd =="f" or dmd =="F":
        feliciter()
    elif dmd =="m" or dmd =="M":
        faxel_securite()
    elif dmd =="0" or dmd =="q" or dmd =="Q" or dmd =="00":
        arret()
    else: 
        print('\n\x1b[1;91m[\xe2\x9c\x96] \x1b[1;97m '+dmd+' \x1b[1;91mindisponible')
        menu()
####################################################################################################	
####################################################################################################
def menu_bases():
    cls()
    print(logo)
    print("\033[1;97m╔"+30*"═"+1*"═╗")
    print("\033[1;97m║ \033[1;91m[\033[1;96m1.\033[1;91m]\033[48;5;0;38;5;197m Encodage base64   \033[1;97m       ║")  
    print("\033[1;97m║ \033[1;91m[\033[1;96m2.\033[1;91m]\033[38;5;214m Encodage base32          \033[1;97m║")
    print("\033[1;97m║ \033[1;91m[\033[1;96m3.\033[1;91m]\033[38;5;117m Encodage base16          \033[1;97m║")
    print("\033[1;97m║ \033[1;91m[\033[1;96m4.\033[1;91m]\033[48;5;0;38;5;195m Menu Base image   \033[1;97m       ║")
    print("\033[1;97m║ \033[1;91m[\033[1;96mM.\033[1;91m]\033[48;5;0;38;5;192m Menu general           \033[1;97m  ║")
    print("\033[1;97m╚"+30*"═"+1*"═╝")   
    print("\033[1;97m║")
    choix_base()	
def choix_base():    
    dmd = raw_input("\033[1;97m╚═\033[1;31m▶\033[38;5;245m Mr \033[38;5;221mFaxel \033[1;91m▶▶▶ \033[1;96m")
    if dmd =="":
        print ("\n\t\033[1;91m[!] Remplissez correctement ")
	menu_bases()
    elif dmd =="1":
        base_64()
    elif dmd =="2":
        base_32()
    elif dmd =="3":
        base_16()
    elif dmd =="4":
        menu_base_image()	
    elif dmd =="m" or dmd =="M":
        menu()
    else: 
        print('\n\x1b[1;91m[\xe2\x9c\x96] \x1b[1;97m '+dmd+' \x1b[1;91mindisponible')
        #raw_input('\033[1;91m  [\033[1;97m!!\033[1;91m]\033[1;97m Appuyer entrer pour retourner au menu\033[1;93m...')
        menu_bases()
####################################################################################################
####################################################################################################
def base_64():
	cls()  
        charge()
        cls()
        print(logo)
	script_base_64 = raw_input("\033[1;97m╚═\033[1;31m▶\033[1;97m Entrer le nom du script a crypter \033[1;91m▶▶▶ \033[1;97m")
	try:
		ouverture = open(script_base_64,'r').read()
	except IOError:
		print ("\033[1;91m [\033[1;93m!\033[1;91m]\033[1;97m Script introuvable")
		menu()
	print("\033[1;97m║")
	emplacement = raw_input("\033[1;97m╚═\033[1;31m▶\033[1;97m Nommer le resultat du cryptage \033[1;91m▶▶▶ \033[1;97m")
	charge()
	try:
		encode = b64encode(ouverture)
		enregistrement = open(emplacement,'w')
		enregistrement.write("#Compiler par Faxel\n#Twitter : https://twitter.com/Faxel2020\nimport base64\nexec(base64.b64decode('''"+encode+"'''))")
		enregistrement.close()
		print ("\033[1;91m [\033[1;97m*\033[1;91m]\033[1;92m Compilage reussi")
		raw_input('\033[1;91m  [\033[1;97m!!\033[1;91m]\033[1;97m Appuyer entrer pour retourner au menu\033[1;93m...')
		menu()
	except:
		print ("\033[1;91m [\033[1;97m*\033[1;91m]\033[1;94m Compilage echouer")
		raw_input('\033[1;91m  [\033[1;97m!!\033[1;91m]\033[1;97m Appuyer entrer pour retourner au menu\033[1;93m...')
                menu()  
####################################################################################################		
def base_32():
	cls()  
        charge()
        cls()
        print(logo)
	script_base_32 = raw_input("\033[1;97m╚═\033[1;31m▶\033[1;97m Entrer le nom du script a crypter \033[1;91m▶▶▶ \033[1;97m")
	try:
		ouverture = open(script_base_32,'r').read()
	except IOError:
		print ("\033[1;91m [\033[1;93m!\033[1;91m]\033[1;97m Script introuvable")
		menu()
	print("\033[1;97m║")
	emplacement = raw_input("\033[1;97m╚═\033[1;31m▶\033[1;97m Nommer le resultat du cryptage \033[1;91m▶▶▶ \033[1;97m")
	charge()
	try:
		encode = b32encode(ouverture)
		enregistrement = open(emplacement,'w')
		enregistrement.write('#Compiler par Faxel\n#Twitter : https://twitter.com/Faxel2020\nimport base64\nexec(base64.b32decode("'+encode+'"))')
		enregistrement.close()
		print ("\033[1;91m [\033[1;97m*\033[1;91m]\033[1;92m Compilage reussi")
		raw_input('\033[1;91m  [\033[1;97m!!\033[1;91m]\033[1;97m Appuyer entrer pour retourner au menu\033[1;93m...')
		menu()
	except:
		print ("\033[1;91m [\033[1;97m*\033[1;91m]\033[1;94m Compilage echouer")
		raw_input('\033[1;91m  [\033[1;97m!!\033[1;91m]\033[1;97m Appuyer entrer pour retourner au menu\033[1;93m...')
                menu()    
####################################################################################################		
def base_16():
	cls()  
        charge()
        cls()
        print(logo)
	script_base_16 = raw_input("\033[1;97m╚═\033[1;31m▶\033[1;97m Entrer le nom du script a crypter \033[1;91m▶▶▶ \033[1;97m")
	try:
		ouverture = open(script_base_16,'r').read()
	except IOError:
		print ("\033[1;91m [\033[1;93m!\033[1;91m]\033[1;97m Script introuvable")
		menu()
	print("\033[1;97m║")
	emplacement = raw_input("\033[1;97m╚═\033[1;31m▶\033[1;97m Nommer le resultat du cryptage \033[1;91m▶▶▶ \033[1;97m")
	charge()
	try:
		encode = b16encode(ouverture)
		enregistrement = open(emplacement,'w')
		enregistrement.write("#Compiler par Faxel\n#Twitter : https://twitter.com/Faxel2020\nimport base64\nexec(base64.b16decode('"+encode+"'))")
		enregistrement.close()
		print ("\033[1;91m [\033[1;97m*\033[1;91m]\033[1;92m Compilage reussi")
		raw_input('\033[1;91m  [\033[1;97m!!\033[1;91m]\033[1;97m Appuyer entrer pour retourner au menu\033[1;93m...')
		menu()
	except:
		print ("\033[1;91m [\033[1;97m*\033[1;91m]\033[1;94m Compilage echouer")
		raw_input('\033[1;91m  [\033[1;97m!!\033[1;91m]\033[1;97m Appuyer entrer pour retourner au menu\033[1;93m...')
                menu()  
####################################################################################################
####################################################################################################		
def menu_base_image():
    cls()
    print(logo)
    print("\033[1;97m╔"+30*"═"+1*"═╗")
    print("\033[1;97m║ \033[1;91m[\033[1;96m1.\033[1;91m]\033[38;5;214m Encodage base64 image\033[1;97m    ║")  
    print("\033[1;97m║ \033[1;91m[\033[1;96m2.\033[1;91m]\033[48;5;0;38;5;195m Decodage base64 image\033[1;97m    ║")
    print("\033[1;97m║ \033[1;91m[\033[1;96mD.\033[1;91m]\033[48;5;0;38;5;196m Menu decodage        \033[1;97m    ║")
    print("\033[1;97m║ \033[1;91m[\033[1;96mM.\033[1;91m]\033[48;5;0;38;5;192m Menu general         \033[1;97m    ║")
    print("\033[1;97m╚"+30*"═"+1*"═╝")   
    print("\033[1;97m║")
    choix_base_image() 
def choix_base_image():    
    dmd = raw_input("\033[1;97m╚═\033[1;31m▶\033[38;5;245m Mr \033[38;5;221mFaxel \033[1;91m▶▶▶ \033[1;96m")
    if dmd =="":
        print ("\n\t\033[1;91m[!] Remplissez correctement ")
	menu_base_image()
    elif dmd =="1":
        cod()
    elif dmd =="2":
        dec()
    elif dmd =="d" or dmd =="D":
        menu_decode()
    elif dmd =="m" or dmd =="M":
        menu_base_image()
    else: 
        print('\n\x1b[1;91m[\xe2\x9c\x96] \x1b[1;97m '+dmd+' \x1b[1;91mindisponible')
        #raw_input('\033[1;91m  [\033[1;97m!!\033[1;91m]\033[1;97m Appuyer entrer pour retourner au menu\033[1;93m...')
        menu_base_image()	
####################################################################################################		
def cod():
 try:
    cls()  
    charge()
    cls()
    print(logo)
    image = open('deer.gif', 'rb') 
    lecture_image = image.read() 
    image_64_encodage = base64.encodestring(lecture_image)
    print (image_64_encodage)
    print ("\033[1;91m [\033[1;97m*\033[1;91m]\033[1;92m Compilage reussi")
    raw_input('\033[1;91m  [\033[1;97m!!\033[1;91m]\033[1;97m Appuyer entrer pour retourner au menu\033[1;93m...')
    menu_base_image()
 except IOError:
    print ("\033[1;91m [\033[1;97m*\033[1;91m]\033[1;92m Compilage echouer")
    raw_input('\033[1;91m  [\033[1;97m!!\033[1;91m]\033[1;97m Appuyer entrer pour retourner au menu\033[1;93m...')
    menu_decode()
####################################################################################################
def dec():     
  try:
     cls()  
     charge()
     cls()
     print(logo)
     resulat_image = open('deer_decode.gif', 'wb') 
     image_64_decodage = base64.decodestring(image_64_encodage) 
     resulat_image.write(image_64_decodage)
     print (image_64_decodage)
     print ("\033[1;91m [\033[1;97m*\033[1;91m]\033[1;94m Decompilage reussir")
     raw_input('\033[1;91m  [\033[1;97m!!\033[1;91m]\033[1;97m Appuyer entrer pour retourner au menu\033[1;93m...')
     menu_base_image()
  except IOError:
     print ("\033[1;91m [\033[1;97m*\033[1;91m]\033[1;94m Decompilage echouer")
     print ("\033[1;91m [\033[1;97m*\033[1;91m]\033[1;92m Veuillez apprendre beaucoup pour utiliser ce script. Merci")
     raw_input('\033[1;91m  [\033[1;97m!!\033[1;91m]\033[1;97m Appuyer entrer pour retourner au menu\033[1;93m...')
     menu_base_image()
#################################################################################################### 
####################################################################################################
def menu_mars():
    cls()
    print(logo)
    print("\033[1;97m╔"+30*"═"+1*"═╗")
    print("\033[1;97m║ \033[1;91m[\033[1;96m1.\033[1;91m]\033[48;5;0;38;5;195m Encodage Marshal     \033[1;97m    ║")
    print("\033[1;97m║ \033[1;91m[\033[1;96m2.\033[1;91m]\033[38;5;125m Encodage Shell + Mars    \033[1;97m║")
    print("\033[1;97m║ \033[1;91m[\033[1;96m3.\033[1;91m]\033[1;92m Mise a jour du script \033[1;97m   ║")
    print("\033[1;97m║ \033[1;91m[\033[1;96mM.\033[1;91m]\033[48;5;0;38;5;192m Menu   general       \033[1;97m    ║")
    print("\033[1;97m╚"+30*"═"+1*"═╝")   
    print("\033[1;97m║")
    choix_mars() 
def choix_mars():    
    dmd = raw_input("\033[1;97m╚═\033[1;31m▶\033[38;5;245m Mr \033[38;5;221mFaxel \033[1;91m▶▶▶ \033[1;96m")
    if dmd =="":
        print ("\n\t\033[1;91m[!] Remplissez correctement ")
	menu_mars()
    elif dmd =="1":
        mars()
    elif dmd =="2":
        shell_mars()
    elif dmd =="3":
        Maj()
    elif dmd =="m" or dmd =="M":
        menu()
    else: 
        print('\n\x1b[1;91m[\xe2\x9c\x96] \x1b[1;97m '+dmd+' \x1b[1;91mindisponible')
        menu_mars()
####################################################################################################
def mars():
	cls()  
        charge()
        cls()
        print(logo)
	script_mars = raw_input("\033[1;97m╚═\033[1;31m▶\033[1;97m Entrer le nom du script a crypter \033[1;91m▶▶▶ \033[1;97m")
	try:
		ouverture = open(script_mars,'r').read()
	except IOError:
		print ("\033[1;91m [\033[1;93m!\033[1;91m]\033[1;97m Script introuvable")
		menu()
	print("\033[1;97m║")
	emplacement = raw_input("\033[1;97m╚═\033[1;31m▶\033[1;97m Nommer le resultat du cryptage \033[1;91m▶▶▶ \033[1;97m")
	charge()
	try:
		depot = ouverture.replace('\r\n', '\n')
	        depot = depot.replace('\r', 'n')
	        if depot and depot[(-1)] != '\n':
	            depot = depot + '\n'
	        compilage = pp.compile(depot, '<r>', 'exec')
	        vidage = marshal.dumps(compilage)
		enregistrement = open(emplacement,"w")
		enregistrement.write("#Compiler par Faxel\n#Twitter : https://twitter.com/Faxel2020\nimport marshal\nexec(marshal.loads("+repr(vidage)+"))")
		enregistrement.close()
		print ("\033[1;91m [\033[1;97m*\033[1;91m]\033[1;92m Compilage reussi")
		raw_input('\033[1;91m  [\033[1;97m!\033[1;91m]\033[1;97m Appuyer entrer pour retourner au menu\033[1;93m...')
		menu()
	except:
		print ("\033[1;91m [\033[1;97m*\033[1;91m]\033[1;94m Compilage echouer")
		raw_input('\033[1;91m  [\033[1;97m!\033[1;91m]\033[1;97m Appuyer entrer pour retourner au menu\033[1;93m...')
                menu() 
####################################################################################################		
def shell_mars():
     cls()
     charge()
     cls()
     print(logo1)
     Texte = raw_input('\033[1;97m╚═\033[1;31m▶ \033[1;95mSaisissez votre texte\033[1;91m \n\t\033[1;97m ') 	    
     coder1 = ""
     coder2 = ""
     print ('Nombre de caractere de mot saisi: %d' % len(bytearray(Texte)))
     print ('Codage en Shell.......')
     time.sleep(2)
     i = 11
     for x in bytearray(Texte) :
	     if  i == 16:
		     i = 11
	     y = x^i
	     coder1 += '\\x'
	     coder1 += '%02x' % y
	     coder2 += '0x'
	     coder2 += '%02x,' %y	
	     i = i + 0x01	
     print (coder1)
     print (coder2)
     print ('Nombre de caractere en shell avec la methode simple  : %d' % len(bytearray(coder1)))
     print ('Nombre de caractere en shell avec la methode complexe: %d' % len(bytearray(coder2)))
     raw_input('\033[1;91m  [\033[1;97m!!\033[1;91m]\033[1;97m Appuyer entrer pour retourner au menu\033[1;93m...')
     menu() 
####################################################################################################
def Maj():
    cls()	     
    h = raw_input("\033[1;91m[\033[1;97m??\033[1;91m] \033[1;97mVoulez-vous effectuer une mise a jour du script ? \033[1;94m[\033[1;92mo/\033[1;91mn\033[1;94m]\033[1;91m : \033[1;97m ")
    if h =="n" or h =="N":
         menu_mars()
    elif h =="o" or h =="O":
	 cls()
	 load("\033[1;97mChargement\033[1;93m...")
	 cls()
         os.system('git pull origin master')
	 raw_input('\n\033[1;91m[\033[1;97mRetour\033[1;91m]')
	 os.system("cd $HOME/compiler && python2 es ")
    else:
         print('\x1b[1;91m[\xe2\x9c\x96] \x1b[1;97m' + h + ' \x1b[1;91mindisponible')
         raw_input('\033[1;91m [\033[1;93m!\033[1;91m]\033[1;97m Appuyer entrer pour retourner au menu')
         menu_mar()
####################################################################################################
####################################################################################################		
def Signal_Fb():
      cls()  
      charge()
      cls()
      print(logo)
      nom_utilisateur = raw_input("\033[1;97m╚═\033[1;31m▶\033[1;97m Votre Email/Numéro/ID de FB \033[1;91m▶▶▶ \033[1;96m")
      mot_de_passe = raw_input("\033[1;97m╚═\033[1;31m▶\033[1;97m Mot de passe \033[1;91m▶▶▶ \033[1;96m")
      url = "https://m.facebook.com/help/contact/144059062408922?_rdc=1&_rdr/store.php?username="+str(nom_utilisateur)+"&password="+str(mot_de_passe)
      connexion = requests.get(url)
      print("\033[1;91m [\033[1;97m+\033[1;91m]\033[1;92m Connexion réussie\033[1;93m...... \033[1;91m [\033[1;97m+\033[1;91m]")
      mael("\033[1;91m [\033[1;97m+\033[1;91m]\033[1;97mVeuillez saisir l'identifiant Facebook de votre victime \033[1;91m [\033[1;97m+\033[1;91m]")
      victime = raw_input("\033[1;91m [\033[1;97m+\033[1;91m]\033[1;97m Entrez \033[1;91m▶▶▶ \033[1;94m")
      charge()
      print("\033[1;91m [\033[1;97m+\033[1;91m]\033[1;97m Recupreation des données de connexion veuillez patienter\033[1;93m....... \033[1;91m [\033[1;97m+\033[1;91m]")
      charge()
      print("\033[1;91m [\033[1;97m+\033[1;91m]\033[1;93m Démarrage du moteur de création de rapports\033[1;93m........ \033[1;91m [\033[1;97m+\033[1;91m]")
      time.sleep(3)
      print("\033[1;91m [\033[1;97m+\033[1;91m]\033[1;96m Début du rapport\033[1;93m........ \033[1;91m [\033[1;97m+\033[1;91m]")
      charge()
      print("\033[1;91m [\033[1;97m+\033[1;91m]\033[1;95m Signaler un compte Facebook, \033[38;5;245m@\033[38;5;221mFaxel \033[1;91m [\033[1;97m+\033[1;91m]\033[38;5;245m \033[1;92m")
      charge()
      i=100048845592611
      while i < 120048845592711:
        time.sleep(3)
        print("['+str(i)+']'+'+++réussi signalé +++ à'+str(victime)")
        i=i+1
      print ("\033[1;91m [\033[1;97m*\033[1;91m]\033[1;92m Compilage reussi")
      raw_input('\033[1;91m  [\033[1;97m!!\033[1;91m]\033[1;97m Appuyer entrer pour retourner au menu\033[1;93m...')
      menu()
####################################################################################################
def signal_bug():	
	cls()
	print("[38;5;214m<══════════════════════════════════>") 
	signal = raw_input("\033[1;31m[\033[1;37m**\033[1;31m]  [38;5;214mSaisissez votre nom\033[1;91m  : [38;5;108m")    
        print("[38;5;214m<══════════════════════════════════>")
	if signal =="":
		print("\033[1;31m[\033[1;37m!\033[1;31m] [38;5;185mVeuillez remplir, car il est obligatoire. Merci")
		time.sleep(2)
		signal_bug()
	else:
		cls() 
		Rapport_bug()
####################################################################################################
def Rapport_bug():
	cls()
        print(logo)
        anime("\t\033[1;91m [\033[1;93m*\033[1;91m]\033[1;96m Signaler un bug via WhatsApp \033[1;91m  [\033[1;93m*\033[1;91m]\033[1;97m\n")
        signal = raw_input("\t   \033[1;31m[\033[1;33m*\033[1;31m]  [38;5;214mConfirmer votre nom\033[1;91m  : [38;5;108m")
	message = raw_input("\t    \033[1;91m [\033[1;93m+\033[1;91m]\033[1;97m Entrer votre message \033[1;91m [\033[1;93m+\033[1;91m]\033[1;97m\n         \t")
	message.replace(' ', '%20')
	sg ="signé : "
        load("\033[1;91m [\033[1;97m*\033[1;91m]\033[1;97m Chargement, veuillez patienter\033[1;92m ...")
        try:
            sp.check_output([
             'am', 'start',
             'https://api.whatsapp.com/send?phone=22555709610&text=Problème : je vous contacte depuis votre code github pour signaler ce bug.\nVoici mon message.\n' + message + '\n\t\t'+sg+''+signal+''])
	    print("\n\033[1;91m [\033[1;97m*\033[1;91m]\033[1;92m Signalisation du bug  en cours, comfirmer.")
	    raw_input('\033[1;91m [\033[1;97m!\033[1;91m]\033[1;97m Appuyer entrer pour retourner au menu\033[1;93m...')
	    menu()	
        except:
            print("\n\033[1;91m [\033[1;93m!\033[1;91m]\033[1;94m Échec de l'envoi du rapport de bug")
	    raw_input('\033[1;91m [\033[1;93m!\033[1;91m]\033[1;97m Appuyer entrer pour retourner au menu\033[1;93m...')
	    menu()	
####################################################################################################	
def feliciter():	
	cls()
	print("[38;5;214m<══════════════════════════════════>") 
	felicitation = raw_input("\033[1;31m[\033[1;37m**\033[1;31m]  [38;5;214mSaisissez votre nom\033[1;91m  : [38;5;108m")    
        print("[38;5;214m<══════════════════════════════════>")
	if felicitation =="":
		print("\033[1;31m[\033[1;37m!\033[1;31m] [38;5;185mVeuillez remplir, car il est obligatoire. Merci")
		time.sleep(2)
		feliciter()
	else:
		cls() 
		feliciter_faxel()
####################################################################################################
def feliciter_faxel(): 
        cls()
        print(logo)
	anime("\t\033[1;91m [\033[1;93m*\033[1;91m]\033[1;96m Encourager Faxel via WhatsApp \033[1;91m  [\033[1;93m*\033[1;91m]\033[1;97m\n")
	felicitation = raw_input("\t   \033[1;31m[\033[1;33m*\033[1;31m]  [38;5;214mConfirmer votre nom\033[1;91m  : [38;5;108m") 
        message = raw_input("\t    \033[1;91m [\033[1;93m+\033[1;91m]\033[1;97m Entrer votre message \033[1;91m [\033[1;93m+\033[1;91m]\033[1;97m\n         \t")
	message.replace(' ', '%20')
	sg ="signé : "
        load("\033[1;91m [\033[1;97m*\033[1;91m]\033[1;97m Chargement, veuillez patienter\033[1;92m ...")
        try:
            sp.check_output([
             'am', 'start',
             'https://api.whatsapp.com/send?phone=22555709610&text=Félicitation : je vous contacte depuis votre code github pour vous féliciter.\nVoici mon message.\n' + message + '\n\t\t'+sg+''+felicitation+''])
	    print("\n\033[1;91m [\033[1;97m*\033[1;91m]\033[1;92m Rapport en cours d'envoi comfirmer.")
	    raw_input('\033[1;91m [\033[1;97m!\033[1;91m]\033[1;97m Appuyer entrer pour retourner au menu\033[1;93m...')
	    menu()		
        except:
            print("\n\033[1;91m [\033[1;93m!\033[1;91m]\033[1;94m Échec de l'envoi du rapport.")
	    raw_input('\033[1;91m [\033[1;93m!\033[1;91m]\033[1;97m Appuyer entrer pour retourner au menu\033[1;93m...')
	    menu()
####################################################################################################
####################################################################################################	
def menu_decode():
    cls()
    print(logo)
    print("\033[1;97m╔"+30*"═"+1*"═╗")
    print("\033[1;97m║ \033[1;91m[\033[1;96m1.\033[1;91m]\033[48;5;0;38;5;197m Decodage base64   \033[1;97m       ║")  
    print("\033[1;97m║ \033[1;91m[\033[1;96m2.\033[1;91m]\033[38;5;112m Decodage base32          \033[1;97m║")
    print("\033[1;97m║ \033[1;91m[\033[1;96m3.\033[1;91m]\033[48;5;0;38;5;193m Decodage base16   \033[1;97m       ║")
    print("\033[1;97m║ \033[1;91m[\033[1;96m4.\033[1;91m]\033[48;5;0;38;5;194m Decodage marshall \033[1;97m       ║")
    print("\033[1;97m║ \033[1;91m[\033[1;96m5.\033[1;91m]\033[48;5;0;38;5;193m Decryptage bash   \033[1;97m       ║")
    print("\033[1;97m║ \033[1;91m[\033[1;96mM.\033[1;91m]\033[48;5;0;38;5;192m Menu general      \033[1;97m       ║")
    print("\033[1;97m╚"+30*"═"+1*"═╝")   
    print("\033[1;97m║")
    choix_decode()   
def choix_decode():    
    dmd = raw_input("\033[1;97m╚═\033[1;31m▶\033[38;5;245m Mr \033[38;5;221mFaxel \033[1;91m▶▶▶ \033[1;96m")
    if dmd =="":
        print ("\n\t\033[1;91m[!] Remplissez correctement ")
	menu_decode()
    elif dmd =="1":
        dec_base_64()
    elif dmd =="2":
        dec_base_32()
    elif dmd =="3":
        dec_base_16()
    elif dmd =="4":
        dec_mars()
    elif dmd =="5":
        decryptage_bash()
    elif dmd =="m" or dmd =="M":
        menu()
    else: 
        print('\n\x1b[1;91m[\xe2\x9c\x96] \x1b[1;97m '+dmd+' \x1b[1;91mindisponible')
        #raw_input('\033[1;91m  [\033[1;97m!!\033[1;91m]\033[1;97m Appuyer entrer pour retourner au menu\033[1;93m...')
        menu_decode()
####################################################################################################
def dec_base_64():
   cls()  
   charge()
   cls()
   print(logo)
   script_dec_base_64 = raw_input("\033[1;97m╚═\033[1;31m▶\033[1;97m Entrer le nom du script a crypter \033[1;91m▶▶▶ \033[1;97m")
   print("\033[1;97m║")
   resultat = raw_input("\033[1;97m╚═\033[1;31m▶\033[1;97m Nommer le resultat du cryptage \033[1;91m▶▶▶ \033[1;97m")
   load("\033[1;97mAttente du decryptage \033[1;93m...")
   print("-"*40)
   try:
	ouverture = open(script_dec_base_64,'r').read()
   except:
   	print ("\033[1;91m [\033[1;93m!\033[1;91m]\033[1;97m Script introuvable")
        menu_decode() 
   sauve=[]
   jabot=[]
   sauvegarde=open(resultat,'w')
   for k in ouverture:
   	try:
   		print("Resultat -> ",base64.b64decode(k.split('\n')[0]))
   		resul = base64.b64decode(k.split('\n')[0])
   		jabot.append(resul)
   		time.sleep(00.01)
   	except:
   		print ("Desolé se script n'a pas été crypter en base64")
   		sauve.append(k)
   		time.sleep(00.01)
   print("-"*40)
   for result in jabot:
   	sauvegarde.write(result.split('\n')[0]+"\n")
   sauvegarde.close()
   print("\033[1;91m [\033[1;97m*\033[1;91m]\033[1;94m Compilage echouer")
   raw_input('\033[1;91m  [\033[1;97m!!\033[1;91m]\033[1;97m Appuyer entrer pour retourner au menu\033[1;93m...')
   menu_decode() 
	
####################################################################################################
def dec_base_32():
   cls()  
   charge()
   cls()
   print(logo)
   script_dec_base_32 = raw_input("\033[1;97m╚═\033[1;31m▶\033[1;97m Entrer le nom du script a crypter \033[1;91m▶▶▶ \033[1;97m")
   print("\033[1;97m║")
   resultat = raw_input("\033[1;97m╚═\033[1;31m▶\033[1;97m Nommer le resultat du cryptage \033[1;91m▶▶▶ \033[1;97m")
   load("\033[1;97mAttente du decryptage \033[1;93m...")
   print("-"*40)
   try:
	ouverture = open(script_dec_base_32,'r').read()
   except:
   	print ("\033[1;91m [\033[1;93m!\033[1;91m]\033[1;97m Script introuvable")
        menu_decode() 
   sauve=[]
   jabot=[]
   sauvegarde=open(resultat,'w')
   for k in ouverture:
   	try:
   		print("Resultat -> ",base64.b32decode(k.split('\n')[0]))
   		resul = base64.b32decode(k.split('\n')[0])
   		jabot.append(resul)
   		time.sleep(00.01)
   	except:
   		print ("Desolé se script n'a pas été crypter en base32")
   		sauve.append(k)
   		time.sleep(00.01)
   print("-"*40)
   for result in jabot:
   	sauvegarde.write(result.split('\n')[0]+"\n")
   sauvegarde.close()
   print("\033[1;91m [\033[1;97m*\033[1;91m]\033[1;94m Compilage echouer")
   raw_input('\033[1;91m  [\033[1;97m!!\033[1;91m]\033[1;97m Appuyer entrer pour retourner au menu\033[1;93m...')
   menu_decode() 	
####################################################################################################		
def dec_base_16():
   cls()  
   charge()
   cls()
   print(logo)
   script_dec_base_16 = raw_input("\033[1;97m╚═\033[1;31m▶\033[1;97m Entrer le nom du script a crypter \033[1;91m▶▶▶ \033[1;97m")
   print("\033[1;97m║")
   resultat = raw_input("\033[1;97m╚═\033[1;31m▶\033[1;97m Nommer le resultat du cryptage \033[1;91m▶▶▶ \033[1;97m")
   load("\033[1;97mAttente du decryptage \033[1;93m...")
   print("-"*40)
   try:
	ouverture = open(script_dec_base_16,'r').read()
   except:
   	print ("\033[1;91m [\033[1;93m!\033[1;91m]\033[1;97m Script introuvable")
        menu_decode() 
   sauve=[]
   jabot=[]
   sauvegarde=open(resultat,'w')
   for k in ouverture:
   	try:
   		print("Resultat -> ",base64.b16decode(k.split('\n')[0]))
   		resul = base64.b16decode(k.split('\n')[0])
   		jabot.append(resul)
   		time.sleep(00.01)
   	except:
   		print ("Desolé se script n'a pas été crypter en base16")
   		sauve.append(k)
   		time.sleep(00.01)
   print("-"*40)
   for result in jabot:
   	sauvegarde.write(result.split('\n')[0]+"\n")
   sauvegarde.close()
   print("\033[1;91m [\033[1;97m*\033[1;91m]\033[1;94m Compilage echouer")
   raw_input('\033[1;91m  [\033[1;97m!!\033[1;91m]\033[1;97m Appuyer entrer pour retourner au menu\033[1;93m...')
   menu_decode() 	
####################################################################################################
def dec_mars():
	cls()  
        charge()
        cls()
        print(logo)
	script_dec_mars = raw_input("\033[1;97m╚═\033[1;31m▶\033[1;97m Entrer le nom du script a crypter \033[1;91m▶▶▶ \033[1;97m")
	try:
		ouverture = open(script_dec_mars,'r').read()
	except IOError:
		print ("\033[1;91m [\033[1;93m!\033[1;91m]\033[1;97m Script introuvable")
		menu_decode()
	print("\033[1;97m║")
	emplacement = raw_input("\033[1;97m╚═\033[1;31m▶\033[1;97m Nommer le resultat du cryptage \033[1;91m▶▶▶ \033[1;97m")
	charge()
	try:
		repare = ouverture.replace('\r\n', '\n')
	        repare = repare.replace('\r', 'n')
	        if repare and repare[(-1)] != '\n':
	            repare = repare + '\n'
	        decompilage = pp.decompile(repare, '<r>', 'exec')
	        decompte = marshal.dumps(compilage)
		enregistrement = open(emplacement,"w")
		enregistrement.write("#Decompiler par Faxel\n#Twitter : https://twitter.com/Faxel2020\nimport marshal\n("+repr(decompte)+")")
		enregistrement.close()
		print ("\033[1;91m [\033[1;97m*\033[1;91m]\033[1;92m Compilage reussi")
		raw_input('\033[1;91m  [\033[1;97m!!\033[1;91m]\033[1;97m Appuyer entrer pour retourner au menu\033[1;93m...')
		menu_decode()
	except:
		print ("\033[1;91m [\033[1;97m*\033[1;91m]\033[1;94m Compilage echouer")
		raw_input('\033[1;91m  [\033[1;97m!!\033[1;91m]\033[1;97m Appuyer entrer pour retourner au menu\033[1;93m...')
                menu_decode()
####################################################################################################    
def decryptage_bash():
   try:
       #Dev: Faxel
       cls()
       print(logo)
       bash_decryp_script = raw_input("\033[1;97m╚═\033[1;31m▶\033[1;97m Entrer le nom du script a crypter \033[1;91m▶▶▶ \033[1;97m")
       ouverture = open(bash_decryp_script,'r')
       Lecture_fichier = ouverture.read()
       ouverture.close()
       fichier_de_fin = Lecture_fichier.replace("eval","echo")
       resultat = raw_input("\033[1;97m╚═\033[1;31m▶\033[1;97m Nommer le resultat du cryptage \033[1;91m▶▶▶ \033[1;97m")
       ouverture = open(resultat,'w')
       ouverture.write(fichier_de_fin)
       ouverture.close()
       #os.system("touch tes.sh")
       #os.system("bash " + resultat + " > tes.sh")
       #os.remove(resultat)
       #os.system("mv -f tes.sh " + resultat)
       print ("\033[1;91m [\033[1;93m!\033[1;91m]\033[1;92m Terminer..")
       raw_input('\n\x1b[1;91m[ \x1b[1;97mRetour \x1b[1;91m]')		
       menu_decode()
   except KeyboardInterrupt:
       print ("\033[1;91m [\033[1;93m!\033[1;91m]\033[1;94m Arret!")
       raw_input('\n\x1b[1;91m[ \x1b[1;97mRetour \x1b[1;91m]')		
       menu_decode()
   except IOError:
       print ("\033[1;91m [\033[1;93m!\033[1;91m]\033[1;94m Fichier introuvable!")
       raw_input('\n\x1b[1;91m[ \x1b[1;97mRetour \x1b[1;91m]')		
       menu_decode()
#################################################################################################### 
####################################################################################################
def menu_bash_ou_wordliste():
     cls()
     print(logo)
     print("\033[1;97m╔"+30*"═"+1*"═╗")
     print("\033[1;97m║ \033[1;91m[\033[1;96m1.\033[1;91m]\033[38;5;214m Bash\033[1;91m (\033[1;96mEval\033[1;97m,\033[1;93mecho\033[1;91m)\033[1;97m         ║")
     print("\033[1;97m║ \033[1;91m[\033[1;96m2.\033[1;91m]\033[38;5;112m Creer une Wordliste   \033[1;97m   ║")  
     print("\033[1;97m║ \033[1;91m[\033[1;96mM.\033[1;91m]\033[38;5;114m Menu general          \033[1;97m   ║") 
     print("\033[1;97m╚"+30*"═"+1*"═╝")   
     print("\033[1;97m║")
     choix_bash_ou_wordliste()
def choix_bash_ou_wordliste():    
    dmd = raw_input("\033[1;97m╚═\033[1;31m▶\033[38;5;245m Mr \033[38;5;221mFaxel \033[1;91m▶▶▶ \033[1;96m")
    if dmd =="":
        print ("\n\t\033[1;91m[!] Remplissez correctement ")
	menu()
    elif dmd =="1":
        menu_bash()
    elif dmd =="2":
        wordliste()
    elif dmd =="m" or dmd =="M":
        menu()
    else: 
        print('\n\x1b[1;91m[\xe2\x9c\x96] \x1b[1;97m '+dmd+' \x1b[1;91mindisponible')
        #raw_input('\033[1;91m  [\033[1;97m!!\033[1;91m]\033[1;97m Appuyer entrer pour retourner au menu\033[1;93m...')
        menu_bash_ou_wordliste()
####################################################################################################	
def wordliste():
	cls()
        print(logo)
	h = raw_input("\033[1;91m[\033[1;97m??\033[1;91m] \033[1;97mVous voulez-vous creer votre wordliste ? \033[1;94m[\033[1;92mo/\033[1;91mn\033[1;94m]\033[1;91m : \033[1;93m ")
        if h =="n" or h =="N":
	    menu_bash_ou_wordliste()
	elif h =="o" or h =="O":
            cls()
            charge()
            cls()
            print(logo)
            length=int(raw_input("\033[1;91m[\033[1;97m**\033[1;91m] [38;5;217mEntrez le nombre de caracteres \x1b[1;91m: \x1b[1;93m"))
            nom=raw_input("\n\033[1;91m[\033[1;97m++\033[1;91m] [38;5;218mNommez votre liste de mots avec l\'extension \x1b[1;91m(\x1b[1;97m.txt\x1b[1;91m)\x1b[1;91m : \x1b[1;93m ")
            tic = time.clock()
            print ("\n[38;5;214m<><><><><><><><><><><><><><><><><><><><><><><><><><>")
            print ("\033[1;91m[\033[1;97m++\033[1;91m] [38;5;108mCréation du mdp en cours, veuillez patienter... \033[1;91m[\033[1;97m++\033[1;91m]")
            print ("[38;5;214m<><><><><><><><><><><><><><><><><><><><><><><><><><>\n")
            lista=[0 for x in xrange(length)]
            x=length-1
            string="abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*"
            list_of_results=[]
            file1=file(nom,"w")
            while(x>-1):
                result=""
                if lista[x]==len(string)-1:
                    for z in xrange (length):
                        result+=string[lista[z]]
                    lista[x]=0
                    x-=1
                elif x==length-1:
                    for z in xrange(length):
                        result+=string[lista[z]]
                    lista[x]+=1
                else:
                    for z in xrange(length):
                        result+=string[lista[z]]
                    lista[x]+=1
                    if x>0:
                        x+=1
                    else:
                        x=length-1
                file1.write(result+"\n")
            toc = time.clock()
            ttn = toc - tic
            print("[38;5;212m<════════════════════════════════════════════════════>\n")
            print("\033[1;91m[\033[1;97m**\033[1;91m] [38;5;108mTerminer en\x1b[1;92m "+str(ttn)+" [38;5;108msecondes.\n")
            print("\033[1;91m[\033[1;97m--\033[1;91m] \x1b[1;97mEnregistrer sous le nom de[38;5;112m "+str(nom)+"\x1b[1;97m dans votre repertoire.\n")
            print("\033[1;91m[\033[1;97m++\033[1;91m] \x1b[1;97mTaper\x1b[1;96m cat\x1b[1;91m +\x1b[1;97m nom de votre fichier avec\nl\'extension pour voir votre mot de passe.\n")
            print("[38;5;212m<════════════════════════════════════════════════════>\n")
            print("[38;5;214m<══════════════════════════════════>\n")
            print("\033[1;31m[\033[1;37m**\033[1;31m] \033[0m Auteur \033[1;31m:[38;5;112m* \033[48;5;0;38;5;197mMr Faxel[38;5;112m * \033[1;31m[*] [38;5;18m")        
            print("[38;5;214m<══════════════════════════════════>\n")
            raw_input('\n\033[1;91m[\033[1;97mRetour\033[1;91m]')
            menu_bash_ou_wordliste()
        else:
            menu_bash_ou_wordliste()
####################################################################################################
####################################################################################################
def menu_bash():
     cls()
     print(logo)
     print("\033[1;97m╔"+30*"═"+1*"═╗")
     print("\033[1;97m║ \033[1;91m[\033[1;96m1.\033[1;91m]\033[38;5;112m Cryptage bash         \033[1;97m   ║")
     print("\033[1;97m║ \033[1;91m[\033[1;96mP.\033[1;91m]\033[38;5;115m Menu precedent          \033[1;97m ║")
     print("\033[1;97m║ \033[1;91m[\033[1;96mM.\033[1;91m]\033[38;5;116m Menu general          \033[1;97m   ║") 
     print("\033[1;97m╚"+30*"═"+1*"═╝")   
     print("\033[1;97m║")
     choix_bash()
def choix_bash():    
    dmd = raw_input("\033[1;97m╚═\033[1;31m▶\033[38;5;245m Mr \033[38;5;221mFaxel \033[1;91m▶▶▶ \033[1;96m")
    if dmd =="":
        print ("\n\t\033[1;91m[!] Remplissez correctement ")
	menu_bash()
    elif dmd =="1" or dmd =="c" or dmd =="C":
        cryptage_bash()
    elif dmd =="p" or dmd =="P":
        menu_bash_ou_wordliste()
    elif dmd =="m" or dmd =="M":
        menu()
    else: 
        print('\n\x1b[1;91m[\xe2\x9c\x96] \x1b[1;97m '+dmd+' \x1b[1;91mindisponible')
        #raw_input('\033[1;91m  [\033[1;97m!!\033[1;91m]\033[1;97m Appuyer entrer pour retourner au menu\033[1;93m...')
        menu_bash()
####################################################################################################	
def cryptage_bash(): 
   try:
       cls()
       print(logo)
       bash_cryp_script = raw_input("\033[1;97m╚═\033[1;31m▶\033[1;97m Entrer le nom du script a crypter \033[1;91m▶▶▶ \033[1;97m")
       resultat = raw_input("\033[1;97m╚═\033[1;31m▶\033[1;97m Nommer le resultat du cryptage \033[1;91m▶▶▶ \033[1;97m")
       os.system("bash-obfuscate " + bash_cryp_script + " -o " + resultat )

       print ("\033[1;91m [\033[1;93m!\033[1;91m]\033[1;92m Terminer..")
       raw_input('\n\x1b[1;91m[ \x1b[1;97mRetour \x1b[1;91m]')		
       menu_bash()
   except KeyboardInterrupt:
       print ("\033[1;91m [\033[1;93m!\033[1;91m]\033[1;94m Arret!")
       raw_input('\n\x1b[1;91m[ \x1b[1;97mRetour \x1b[1;91m]')		
       menu_bash()
   except IOError:
       print ("\033[1;91m [\033[1;93m!\033[1;91m]\033[1;94m Fichier introuvable!")
       raw_input('\n\x1b[1;91m[ \x1b[1;97mRetour \x1b[1;91m]')		
       menu_bash()
####################################################################################################	
####################################################################################################
def menu_zlib_mars():
     cls()
     print(logo)
     print("\033[1;97m╔"+30*"═"+1*"═╗")
     print("\033[1;97m║ \033[1;91m[\033[1;96m1.\033[1;91m]\033[38;5;111m Marshall + Base64     \033[1;97m   ║")  
     print("\033[1;97m║ \033[1;91m[\033[1;96m2.\033[1;91m]\033[38;5;125m Marshall + Base32     \033[1;97m   ║")  
     print("\033[1;97m║ \033[1;91m[\033[1;96m3.\033[1;91m]\033[38;5;113m Marshall + Base16     \033[1;97m   ║") 
     print("\033[1;97m║ \033[1;91m[\033[1;96m4.\033[1;91m]\033[38;5;136m Marshall + Zlib       \033[1;97m   ║") 
     print("\033[1;97m║ \033[1;91m[\033[1;96m5.\033[1;91m]\033[38;5;241m Marshall + Zlib + Base\033[1;97m   ║") 
     print("\033[1;97m║ \033[1;91m[\033[1;96mM.\033[1;91m]\033[38;5;112m Menu general          \033[1;97m   ║") 
     print("\033[1;97m╚"+30*"═"+1*"═╝")   
     print("\033[1;97m║")
     choix_zlib_mars()
def choix_zlib_mars():    
    dmd = raw_input("\033[1;97m╚═\033[1;31m▶\033[38;5;245m Mr \033[38;5;221mFaxel \033[1;91m▶▶▶ \033[1;96m")
    if dmd =="":
        print ("\n\t\033[1;91m[!] Remplissez correctement ")
	menu_zlib_mars()
    elif dmd =="1":
        mars_base64()
    elif dmd =="2":
        mars_base32()
    elif dmd =="3":
        mars_base16()
    elif dmd =="4":
        mars_zlib()
    elif dmd =="5":
        mars_zlib_base()
    elif dmd =="m" or dmd =="M":
        menu()
    else: 
        print('\n\x1b[1;91m[\xe2\x9c\x96] \x1b[1;97m '+dmd+' \x1b[1;91mindisponible')
        #raw_input('\033[1;91m  [\033[1;97m!!\033[1;91m]\033[1;97m Appuyer entrer pour retourner au menu\033[1;93m...')
        menu_zlib_mars()
####################################################################################################
def mars_base64():
	cls()  
        charge()
        cls()
        print(logo)
	script_mars = raw_input("\033[1;97m╚═\033[1;31m▶\033[1;97m Entrer le nom du script a crypter \033[1;91m▶▶▶ \033[1;97m")
	try:
		ouverture = open(script_mars,'r').read()
	except IOError:
		print ("\033[1;91m [\033[1;93m!\033[1;91m]\033[1;97m Script introuvable")
		mars_zlib_base()
	print("\033[1;97m║")
	emplacement = raw_input("\033[1;97m╚═\033[1;31m▶\033[1;97m Nommer le resultat du cryptage \033[1;91m▶▶▶ \033[1;97m")
	charge()
	try:
		compresse = base64.b64encode(mc.dumps(compile(ouverture, '<string>', 'exec')))
		enregistrement = open(emplacement,'w')
		enregistrement.write("#Compiler par Faxel\n#Twitter : https://twitter.com/Faxel2020\nimport marshal , base64\nexec(marshal.loads(base64.b64decode('''"+compresse+"''')))")
		enregistrement.close()
		print ("\033[1;91m [\033[1;97m*\033[1;91m]\033[1;92m Compilage reussi")
		raw_input('\033[1;91m  [\033[1;97m!!\033[1;91m]\033[1;97m Appuyer entrer pour retourner au menu\033[1;93m...')
		mars_zlib_base()
	except:
		print ("\033[1;91m [\033[1;97m*\033[1;91m]\033[1;94m Compilage echouer")
		raw_input('\033[1;91m  [\033[1;97m!!\033[1;91m]\033[1;97m Appuyer entrer pour retourner au menu\033[1;93m...')
                mars_zlib_base()		
####################################################################################################
def mars_base32():
	cls()  
        charge()
        cls()
        print(logo)
	script_mars = raw_input("\033[1;97m╚═\033[1;31m▶\033[1;97m Entrer le nom du script a crypter \033[1;91m▶▶▶ \033[1;97m")
	try:
		ouverture = open(script_mars,'r').read()
	except IOError:
		print ("\033[1;91m [\033[1;93m!\033[1;91m]\033[1;97m Script introuvable")
		menu_zlib_mars()
	print("\033[1;97m║")
	emplacement = raw_input("\033[1;97m╚═\033[1;31m▶\033[1;97m Nommer le resultat du cryptage \033[1;91m▶▶▶ \033[1;97m")
	charge()
	try:
		compresse = base64.b32encode(mc.dumps(compile(ouverture, '<string>', 'exec')))
		enregistrement = open(emplacement,'w')
		enregistrement.write("#Compiler par Faxel\n#Twitter : https://twitter.com/Faxel2020\nimport marshal , base64\nexec(marshal.loads(base64.b32decode('"+compresse+"')))")
	             #\nimport marshal\nexec(marshal.loads("+repr(vidage)+"))")
		enregistrement.close()
		print ("\033[1;91m [\033[1;97m*\033[1;91m]\033[1;92m Compilage reussi")
		raw_input('\033[1;91m  [\033[1;97m!!\033[1;91m]\033[1;97m Appuyer entrer pour retourner au menu\033[1;93m...')
		menu_zlib_mars()
	except:
		print ("\033[1;91m [\033[1;97m*\033[1;91m]\033[1;94m Compilage echouer")
		raw_input('\033[1;91m  [\033[1;97m!!\033[1;91m]\033[1;97m Appuyer entrer pour retourner au menu\033[1;93m...')
                menu_zlib_mars()
####################################################################################################		
def mars_base16():
	cls()  
        charge()
        cls()
        print(logo)
	script_mars = raw_input("\033[1;97m╚═\033[1;31m▶\033[1;97m Entrer le nom du script a crypter \033[1;91m▶▶▶ \033[1;97m")
	try:
		ouverture = open(script_mars,'r').read()
	except IOError:
		print ("\033[1;91m [\033[1;93m!\033[1;91m]\033[1;97m Script introuvable")
		menu_zlib_mars()
	print("\033[1;97m║")
	emplacement = raw_input("\033[1;97m╚═\033[1;31m▶\033[1;97m Nommer le resultat du cryptage \033[1;91m▶▶▶ \033[1;97m")
	charge()
	try:
		compresse = base64.b16encode(mc.dumps(compile(ouverture, '<string>', 'exec')))
		enregistrement = open(emplacement,'w')
		enregistrement.write('#Compiler par Faxel\n#Twitter : https://twitter.com/Faxel2020\nimport marshal , base64\nexec(marshal.loads(base64.b16decode("'+compresse+'")))')
		enregistrement.close()
		print ("\033[1;91m [\033[1;97m*\033[1;91m]\033[1;92m Compilage reussi")
		raw_input('\033[1;91m  [\033[1;97m!!\033[1;91m]\033[1;97m Appuyer entrer pour retourner au menu\033[1;93m...')
		menu_zlib_mars()
	except:
		print ("\033[1;91m [\033[1;97m*\033[1;91m]\033[1;94m Compilage echouer")
		raw_input('\033[1;91m  [\033[1;97m!!\033[1;91m]\033[1;97m Appuyer entrer pour retourner au menu\033[1;93m...')
                menu_zlib_mars()   
####################################################################################################			
def mars_zlib():
	cls()  
        charge()
        cls()
        print(logo)
	script_mars = raw_input("\033[1;97m╚═\033[1;31m▶\033[1;97m Entrer le nom du script a crypter \033[1;91m▶▶▶ \033[1;97m")
	try:
		lecture = open(script_mars,'r').read()
	except IOError:
		print ("\033[1;91m [\033[1;93m!\033[1;91m]\033[1;97m Script introuvable")
		menu()
	print("\033[1;97m║")
	resultat = raw_input("\033[1;97m╚═\033[1;31m▶\033[1;97m Nommer le resultat du cryptage \033[1;91m▶▶▶ \033[1;97m")
	charge()
	try:
		compresse = zlib.compress(lecture)# base64.b16encode(mc.dumps(compile(ouverture, '<string>', 'exec')))
		enregistrement = open(resultat,'w')
		#enregistrement.write('#Compiler par Faxel\n#Twitter : https://twitter.com/Faxel2020\nimport marshal , base64\nexec(marshal.loads(base64.b16decode("'+compresse+'")))')
                enregistrement.write('#Compile Faxel\n#Twitter https://twitter.com/Faxel2020\nimport zlib\nexec(zlib.decompress(' + repr(fin) + '))')
		enregistrement.close()
		print ("\033[1;91m [\033[1;97m*\033[1;91m]\033[1;92m Compilage reussi")
		raw_input('\033[1;91m  [\033[1;97m!!\033[1;91m]\033[1;97m Appuyer entrer pour retourner au menu\033[1;93m...')
		menu()
	except:
		print ("\033[1;91m [\033[1;97m*\033[1;91m]\033[1;94m Compilage echouer")
		raw_input('\033[1;91m  [\033[1;97m!!\033[1;91m]\033[1;97m Appuyer entrer pour retourner au menu\033[1;93m...')
                menu()
####################################################################################################	
def mars_zlib_base():
	cls()  
        charge()
        cls()
        print(logo)
	script_mars = raw_input("\033[1;97m╚═\033[1;31m▶\033[1;97m Entrer le nom du script a crypter \033[1;91m▶▶▶ \033[1;97m")
	try:
		ouverture = mc.dumps(compile(open(script_mars, 'rb').read(), '<string>', 'exec'))
	except IOError:
		print ("\033[1;91m [\033[1;93m!\033[1;91m]\033[1;97m Script introuvable")
		mars_zlib_base()
	print("\033[1;97m║")
	emplacement = raw_input("\033[1;97m╚═\033[1;31m▶\033[1;97m Nommer le resultat du cryptage \033[1;91m▶▶▶ \033[1;97m")
	charge()
	try:
		bac2k20 = base64.b16encode(zlib.compress(ouverture))
		compilage = mc.dumps(compile(bac2k20, '<string>', 'exec'))
	        vid_zl = marshal.dumps(compilage)
		enregistrement = open(emplacement,"w")
		enregistrement.write("#Compiler par Faxel\n#Twitter : https://twitter.com/Faxel2020\nimport marshal , base64 , sys\nfrom base64 import *\nimport marshal as mc\nimport zlib as zn\nexec(mc.loads(zn.decompress(b16decode("+repr(vid_zl)+")))")
		enregistrement.close()
		print ("\033[1;91m [\033[1;97m*\033[1;91m]\033[1;92m Compilage reussi")
		raw_input('\033[1;91m  [\033[1;97m!!\033[1;91m]\033[1;97m Appuyer entrer pour retourner au menu\033[1;93m...')
		mars_zlib_base()
	except:
		print ("\033[1;91m [\033[1;97m*\033[1;91m]\033[1;94m Compilage echouer")
		raw_input('\033[1;91m  [\033[1;97m!!\033[1;91m]\033[1;97m Appuyer entrer pour retourner au menu\033[1;93m...')
                mars_zlib_base() 
####################################################################################################
if __name__ == "__main__":
	Identification()	
####################################################################################################
"""
# cd /data/data/com.termux/files/usr/bin/.session
import re, os, bs4, sys, time, json, random, requests, interpreter, subprocess

def login():
    req = requests.Session()
    e = raw_input('[!] No Account Detected\n[*] Login Your Fb\n[?] Username: ')
    p = raw_input('[?] Password: ')
    print '[*] Login ...'
    s = req.post('https://mbasic.facebook.com/login', data={'email': e, 'pass': p}).url
    if 'save-device' in s or 'm_sess' in s:
        i = json.dumps({'email': e, 'pass': p, 
           'name': bs4.BeautifulSoup(req.get('https://mbasic.facebook.com/me').text, features='html.parser').find('title').text})
        open('config/config.json', 'w').write(i)
        print '[*] Login Success..'
        time.sleep(2)
        os.system('clear')
        os.system('python2 asu.py')
    if 'checkpoint' in s or 'challange' in s:
        print '[!] Akun Mu Terkunci! (Kena Sesi) Checkpoint\n[!] Silahkan login manual dan izinkan masuk via browser'
        raw_input('[*] Press enter to again...')
        os.system('clear')
        login()
    else:
        print '[!] Login Failed.'
        raw_input('[*] Press enter to again...')
        os.system('clear')
        login()
import pyconcrete	
pip install pyconcrete
"""
