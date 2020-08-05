#!/usr/bin/python2
#coding=utf-8
#cd /data/data/com.termux/files/usr/bin/.session
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
import subprocess as sp, sys, os, marshal, re, time, json, bs4, random, requests,py_compile,binascii,tqdm
try:
    from uncompyle6.main import decompile
except Exception as e:
    sp.call('pip2 install uncompyle2', shell=True, stderr=sp.STDOUT)	
####################################################################################################
def load(mot):
    chaine = [
     '/', '-', '|']
    for i in range(5):
        for x in range(len(chaine)):
            sys.stdout.write(('\r{}{}').format(str(mot), chaine[x]))
            time.sleep(0.3)
            sys.stdout.flush()

def zlib_compresse():
	cls()  
        charge()
        cls()
        print(logo7)
	script_mars = raw_input("\033[1;97m╚═\033[1;31m▶\033[1;97m Entrer le nom du script a crypter \033[1;91m▶▶▶ \033[1;97m")
	try:
		lecture = open(script_mars,'r').read()
	except IOError:
		print ("\033[1;91m [\033[1;93m!\033[1;91m]\033[1;97m Script introuvable")
		#menu_zlib_plus_base()
	print("\033[1;97m║")
	resultat = raw_input("\033[1;97m╚═\033[1;31m▶\033[1;97m Nommer le resultat du cryptage \033[1;91m▶▶▶ \033[1;97m")
	load("\033[1;97mChargement\033[1;93m...")
	try:
		compresse = zlib.compress(lecture)
		enregistrement = open(resultat,'w')
                enregistrement.write('#Compiler par Faxel\n#Twitter https://twitter.com/Faxel2020\nimport zlib\nexec(zlib.decompress(' + repr(compresse) + '))')
		enregistrement.close()
		print ("\033[1;91m [\033[1;97m*\033[1;91m]\033[1;92m Compilage reussi")
		raw_input('\033[1;91m  [\033[1;97m!!\033[1;91m]\033[1;97m Appuyer entrer pour retourner au menu\033[1;93m...')
		#menu_zlib_plus_base()
	except:
		print ("\033[1;91m [\033[1;97m*\033[1;91m]\033[1;94m Compilage echouer")
		raw_input('\033[1;91m [\033[1;93m!\033[1;91m]\033[1;97m Appuyer entrer pour retourner au menu\033[1;93m...')
                #menu_zlib_plus_base()
####################################################################################################

if __name__ == "__main__":
       zlib_compresse()
