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

## Features
The data dashboard contains several features that enable users to explore and analyze job listings within the world of data. The homepage features an interactive map that displays markers for each job listing, including the employer name, job city, job title, and whether the position is remote. Each marker also includes a link for applying to the job. The homepage also features four buttons that navigate to each respective page.

<img width="1440" alt="Screenshot 2023-02-23 at 10 24 40 PM" src="https://user-images.githubusercontent.com/112406455/221091531-dd930ef2-f787-4e6d-9146-66a3c22aee00.png">

The "States" page displays a bar chart of the median household income for each state, providing job seekers with information to compare the salary of a job listing against the median income for that state.

<img width="1440" alt="Screenshot 2023-02-23 at 9 02 22 PM" src="https://user-images.githubusercontent.com/112406455/221091573-46dd1317-cdb0-4711-a2e4-e11397db9883.png">

The "Jobs" page contains two bar charts. The first chart compares the median salary of four common job positions in the field of data: python developer, data scientist, full-stack developer, and data analyst.

<img width="1440" alt="Screenshot 2023-02-23 at 9 02 44 PM" src="https://user-images.githubusercontent.com/112406455/221091783-5005f716-c107-4406-87f7-b9d9b7967ae4.png">

The second chart displays the frequency of tools mentioned in the job descriptions of the listed positions. This information can be used by job seekers to determine which skills to prioritize in their job search.

<img width="1400" alt="Screenshot 2023-02-23 at 9 02 51 PM" src="https://user-images.githubusercontent.com/112406455/221091811-d5f68522-d2e6-40ca-8c8a-f95d545a35c9.png">

The dashboard also features two pages with data tables. The "States" data table includes information such as the state's website, demonym, nickname, and founded date.

<img width="1440" alt="Screenshot 2023-02-23 at 9 03 05 PM" src="https://user-images.githubusercontent.com/112406455/221091958-92987a87-ec99-4658-ad39-b040a6337676.png">


The "Jobs" data table contains information on each job listing displayed on the map, including the job description.

<img width="1440" alt="Screenshot 2023-02-23 at 9 03 48 PM" src="https://user-images.githubusercontent.com/112406455/221091985-b1f923a9-a87f-4987-b367-a4ddbcf6a6aa.png">


The navigation menu allows users to easily switch between the different pages of the dashboard.

<img width="236" alt="Screenshot 2023-02-23 at 10 31 07 PM" src="https://user-images.githubusercontent.com/112406455/221092295-28df2e6c-3549-4a71-9506-d156c0dbed3a.png">

## Getting Started 
To get started with this project, follow the steps below:
1. Clone the repository to your local machine using git clone https://github.com/username/data-jobs-dashboard.git.
2. Ensure you have Python 3.7 or later installed on your machine.
3. Install the required Python packages by running pip install -r requirements.txt in your terminal.
4. Set up a PostgreSQL database by running the jobs.sql script in the root directory.
6. Run the Flask app by running python app.py in your terminal.
7. Navigate to http://localhost:5050 in your web browser to use the application.
