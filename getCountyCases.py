import pandas as pd
from datetime import datetime, date, timedelta
import csv
import requests

def getCountyCases(county, state):
    # Get latest COVID-19 data by location using JHU's dataset
    yesterday = date.today() - timedelta(days = 1) # use yesterday's data because data is uploaded in the evening
    month = '{:02d}'.format(yesterday.month)
    day = '{:02d}'.format(yesterday.day)
    year = '{:04d}'.format(yesterday.year)

    #cases from yesterday
    URL = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/' + str(month) + '-' + str(day) + '-' + str(year) + '.csv'

    response = requests.get(URL)

    csv_reader = csv.reader(response.text.strip().split('\n'), delimiter=',')

    for row in csv_reader:
        if row[1] == county:
            if row[2] == state:
                casesYesterday = row[7]

    oneWeek = date.today() - timedelta(days = 8) # 7 days from yesterday
    month = '{:02d}'.format(oneWeek.month)
    day = '{:02d}'.format(oneWeek.day)
    year = '{:04d}'.format(oneWeek.year)

    #cases from last week
    URL = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/' + str(month) + '-' + str(day) + '-' + str(year) + '.csv'

    response = requests.get(URL)

    csv_reader = csv.reader(response.text.strip().split('\n'), delimiter=',')

    for row in csv_reader:
        if row[1] == county:
            if row[2] == state:
                casesOneWeek = row[7]

    newCasesOneWeek = float(casesYesterday) - float(casesOneWeek)

    #print(casesYesterday, casesOneWeek, newCasesOneWeek)

    county = county + " County"
    population = 1
    with open('US_Counties_by_Population.csv') as csv_file:
            csv_reader = csv.reader(csv_file, delimiter=',')
            #line_count = 0
            for row in csv_reader:
                if row[1] == county:
                    if row[2] == state:
                        population = float(row[3])
    
    if(population == 1):
        return [0.7, 1.4, 0]
    
    infRateLow = newCasesOneWeek/population
    infRateHigh = infRateLow * 2

    #print(infRateLow, infRateHigh)
    return [infRateLow, infRateHigh, 0]

print(getCountyCases("Durham", "North Carolina"))