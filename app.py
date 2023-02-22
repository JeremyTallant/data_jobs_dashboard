from flask import Flask, jsonify, render_template
import pandas as pd
import sqlalchemy

# Create a new Flask app
app = Flask(__name__)

# Define a function to create a database engine
def create_engine():
    # Replace with your actual database credentials
    engine = sqlalchemy.create_engine(
        'postgresql://postgres:postgres@localhost:5432/jobs')
    return engine

# Define the first API route to get all rows from the "jobs" table
@app.route('/api/v1.0/jobs')
def get_jobs():
    # Create a database engine
    engine = create_engine()

    # Query the "jobs" table and load the results into a Pandas DataFrame
    df = pd.read_sql_table('jobs', engine)

    # Convert the DataFrame to a JSON object and return it
    return jsonify(df.to_dict(orient='records'))

# Define the second API route to get all rows from the "states" table
@app.route('/api/v1.0/states')
def get_companies():
    # Create a database engine
    engine = create_engine()

    # Query the "companies" table and load the results into a Pandas DataFrame
    df = pd.read_sql_table('states', engine)

    # Convert the DataFrame to a JSON object and return it
    return jsonify(df.to_dict(orient='records'))

# Define the third API route to get all rows from the "salary" table
@app.route('/api/v1.0/salary')
def get_locations():
    # Create a database engine
    engine = create_engine()

    # Query the "locations" table and load the results into a Pandas DataFrame
    df = pd.read_sql_table('salary', engine)

    # Convert the DataFrame to a JSON object and return it
    return jsonify(df.to_dict(orient='records'))

# Define the fourth API route to get all rows from the "tools" table
@app.route('/api/v1.0/tools')
def get_categories():
    # Create a database engine
    engine = create_engine()

    # Query the "categories" table and load the results into a Pandas DataFrame
    df = pd.read_sql_table('tools', engine)

    # Convert the DataFrame to a JSON object and return it
    return jsonify(df.to_dict(orient='records'))

# Define the route to render the index page
@app.route('/')
def index():
    return render_template('index.html')

# Define the route to render the jobs page
@app.route('/jobs')
def jobs():
    return render_template('jobs.html')

# Define the route to render the states page
@app.route('/states')
def states():
    return render_template('states.html')

# Define the route to render the states charts page
@app.route('/states_charts')
def states_charts():
    return render_template('states_charts.html')

# Define the route to render the job charts page
@app.route('/job_charts')
def job_charts():
    return render_template('job_charts.html')


# Run the app on port 5000
if __name__ == '__main__':
    app.run(port=5000)
