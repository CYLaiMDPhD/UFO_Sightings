# Search UFO Sightings

*Note: This repository was generated to fulfill assignments (Module 11 Exercises and Challenge) for the UC Berkeley Data Analytics and Visualization Bootcamp. The analysis, content, and format of this report were based on the grading rubric.*

*Module Exercises:*
- *Introduction to JavaScript and ES6+*
- *JavaScript objects, components, and functions*
  - *Basic functions*
  - *Logic, conditionals, filters*
  - *Loops*
  - *Creating dynamic tables*
- *Bootstrap components*
- *Using DS3*
- *Storyboarding*


## Overview
This project demonstrates some basic skills in using JavaScript, CSS, and html to create an interactive webpage to display data. To view to final output of this module, download the index.html and associated files and open the html in a web browser. The page rendered provides easy access to a dataset of UFO sightings in the North America in 2010. The webpage allows for filtering by date, location (city, state, or country), and object shape.


**Data Source:**
A limited dataset of UFO sightings in North America in 2010 provided as a .js file as part of course materials.

---
## Results
Users can explore the UFO sightings by filtering for date, city, state, country, and shape.  

To filter for specific sighting information, use the following input formats:
- Date: m/d/yyyy
- City: lower case full city name
- State: lower case two letter abbreviation for states
- Country: lower case two letter abbreviation for countries (us for United States, ca for Canada)
- Shape: single word lower case terms such as "light", "circle", "triangle", "unknown"


Users must press enter after each input field to update the table. Figure 1 below shows an example of multiple filters being applied and the table.

**Figure 1: Example Search**
![example.png](/static/images/example.png)


---
## Summary

This website makes the UFO sightings data in our dataset more accessible through use of multiple filters. However, the search algorithm can still be improved in several ways. In the current form, users must use the exact case (lower case) for all text search terms and two letter abbreviations for states and countries. Without clear instructions, users may input the wrong search terms, returning an empty table. Additional code to correct for case and full spellings of states and countries would be helpful. Another improvement concerns the "Shape" filter. Novice UFO hobbyists may not know the standard or common "shape" terms to search for. If the data set includes a reasonable set of shapes, the input field could be changed to a drop-down menu.

Further improvements include automating updating the table with new data on a periodic basis and searching the comments section for any text.
