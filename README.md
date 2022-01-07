# UFOs

*Note: This repository was generated to fulfill assignments (Module 11 Exercises and Challenge) for the UC Berkeley Data Analytics and Visualization Bootcamp. Data for this repository (data.js) was downloaded from the program course materials. Submitted on 1-6-22 for grading.*


## Overview
This project website is intended to provide easy access to a data set of UFO sightings in the North America in 2010. The original data set, provided as a javascript file, is presented here as a filterable html table.

---
## Results
Users can explore the sightings by filtering for date, city, state, country, and shape.  

To filter for specific sighting information, use the following input formats:
\tDate: m/d/yyyy
\tCity: lower case full city name
\tState: lower case two letter abbreviation for states
\tCountry: lower case two letter abbreviation for countries (us for United States, ca for Canada)
\tShape: single word lower case terms such as "light", "circle", "triangle", "unknown"


Users must press enter after each input field to update the table. Figure 1 below shows an example of multiple filters being applied and the table.

**Figure 1: Example Search**
![example.png](/static/images/example.png)


---
## Summary

This website makes the UFO sightings data more accessible through use of multiple filters. However, the search algorithm can still be improved in several ways. In the current form, users must use the exact case (lower case) for all text search terms and two letter abbreviations for states and countries. Without clear instructions, users may input the wrong search terms, returning an empty table. Additional code 
to correct for case and full spellings of states and countries would be helpful. Another improvement concerns the "Shape" filter. Novice UFO hobbyists may not know the standard or common "shape" terms to search for. If the data set includes a reasonable set of shapes, the input field could be changed to a drop-down menu.

Further improvements include automating updating the table with new data on a periodic basis and searching the comments section for any text.