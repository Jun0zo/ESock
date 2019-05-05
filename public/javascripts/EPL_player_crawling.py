from selenium import webdriver
from selenium.webdriver.common.keys import Keys 
import requests


path = "/Users/joon0zo/Downloads/chromedriver"
url = "http://www.google.com"
driver = webdriver.Chrome(path)
driver.get(url)
search = driver.find_element_by_name('q')
search.send_keys('EPL')
search.submit()



