# Data Jobs Dashboard
<img width="1440" alt="Screenshot 2023-02-23 at 9 02 05 PM" src="https://user-images.githubusercontent.com/112406455/221083541-19cbe38b-1402-471d-a8f7-61afb310f2ed.png">

## Table of Contents
- [Project Description](#project-description)
- [Data Retrieval](#data-retrieval)
- [Data Cleaning and Loading](#data-cleaning-and-loading)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Deployment](#deployment)
- [Future Work](#future-work)

## Project Description
This project endeavors to develop a full-stack web application that provides a comprehensive visualization of job listings in the field of Data. Python's Flask framework is employed to serve as the backend API, interfacing with a PostgreSQL database to supply the frontend with data via HTML templates and JavaScript visualization libraries such as Plotly and Leaflet.

To achieve the data visualization objectives, data is obtained from a RapidAPI service and is subjected to a rigorous cleaning and processing regimen utilizing Python libraries such as pandas and NumPy. The Flask app includes routes that enable the serving of HTML and CSS templates for the distinct web pages, and returns the PostgreSQL data as JSON objects that the JavaScript libraries can use to produce interactive visualizations.

The project boasts Jupyter Notebooks dedicated to data cleaning, processing, and exploration. Additionally, the file structure includes a README file that highlights the project's organization, a requirements file that itemizes the Python packages used in the project.

The final web application provides a landing page displaying all the available jobs on a map, featuring links to other data visualization pages. The data visualization pages showcase interactive barcharts and data tables that empower users to explore and analyze the job listings and gain insights into the job seekers' expectations. The web application is designed with user-friendliness, accessibility, and visual appeal in mind, with lucid explanations of the data and visualizations presented.

## Data Retrieval 
Two primary APIs were utilized to collect data, both of which were acquired from the [RapidAPI](https://rapidapi.com/?utm_source=google&utm_medium=cpc&utm_campaign=DSA&utm_term=_&gclid=Cj0KCQiAutyfBhCMARIsAMgcRJQUSlXGt8wfcjrg6hz3N7sveOb40InsdWTgGZeDZ9ZUqBGoC34Ags4aAnEwEALw_wcB) website. The first, [JSearch](https://rapidapi.com/letscrape-6bRBa3QguO5/api/jsearch), was used to retrieve information about job applications and salaries. The second API, [US States](https://rapidapi.com/aptitudeapps/api/us-states/), was utilized to collect data regarding the states in the United States. The data collected from the APIs was saved as JSON files in the designated [data](https://github.com/JeremyTallant/data_jobs_dashboard/tree/main/data) folder. It should be noted that these APIs necessitate a paid subscription, but to avoid this, the [database](https://github.com/JeremyTallant/data_jobs_dashboard/tree/main/database) is loaded in the repository to ensure that users can access the data used in the application without subscribing to the APIs. It is important to note that the job applications data might be outdated due to the time the original data was retrieved.

## Data Cleaning and Loading 
The [notebooks](https://github.com/JeremyTallant/data_jobs_dashboard/tree/main/notebooks) folder includes two Jupyter notebook files: one for data cleaning and the other for data exploration. The data cleaning process involved loading the data into Pandas data frames, removing nulls or irrelevant data, and then uploading three tables (states, jobs, and salary) into a PostgreSQL database. The data exploration notebook analyzed the job descriptions within the "jobs" table to determine which tools were mentioned most frequently. The results can be used to assist job seekers in identifying the skills they need to sharpen or acquire in order to increase their chances of landing a job. The tool data was also uploaded into the database, where it can be utilized within the dashboard for visual representation.

## Tech Stack
The following technologies were used to develop the project:

* Python (including Pandas, Flask, and SQLAlchemy)
* JavaScript (including Plotly, Leaflet, and D3.js)
* HTML and CSS
* Bootstrap
