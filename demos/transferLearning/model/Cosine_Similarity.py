# -*- coding: utf-8 -*-
"""
Created on Wed Mar  3 22:31:51 2021

@author: Rumaysa
"""
# Import libraries
import cv2, os

os.chdir(r'C:\Users\2x3lu\OneDrive\Desktop\Published_database_FV-USM_Dec2013\1st_session\extractedvein\vein001_1')

PATH = os.getcwd()

image = cv2.imread('01.jpg') 
