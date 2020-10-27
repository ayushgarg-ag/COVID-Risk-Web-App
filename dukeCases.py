import requests
from bs4 import BeautifulSoup
import re

# Scrape Duke's COVID Testing Tracker for data
URL = 'https://coronavirus.duke.edu/covid-testing/'
page = requests.get(URL)

soup = BeautifulSoup(page.content, 'html.parser')
tables = soup.findAll("table")

print("Tests conducted at Duke this week")
tableNum = 0
for table in tables:
    if tableNum == 2:  # the table with combined totals
        td_list = table.find_all("td")
        numTested = int(re.sub("[^0-9]", "", td_list[1].text.strip()))
        numPositive = int(re.sub("[^0-9]", "", td_list[2].text.strip()))
        print("Total tests: " + str(numTested))
        print("Positive tests: " + str(numPositive))
        print("Infection rate: {:0.4f}%".format(100*(numPositive/numTested)))
    tableNum += 1
