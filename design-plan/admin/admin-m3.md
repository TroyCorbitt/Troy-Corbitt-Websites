# Project 3, Milestone 3: **Administrator** Design Journey

[← Table of Contents](../design-journey.md)


## Milestone 2 Feedback Revisions
> Explain what you individually revised in response to the Milestone 1 feedback (1-2 sentences)
> If you didn't make any revisions, explain why.

N/A


## Edit Form - UPDATE query
> Plan your query to update an entry in your catalog.

````sql
UPDATE songs (ranking, song_name, artist, album, release_date, genre, languages, file_path, file_type)
SET (:ranking, :song_name, :artist, :album, :release_date, :genre, :languages, :file_path, :file_type);
```


## Edit Form - Sample Test Data
> Document sample test data to edit an entry in your catalog.
> Upload a sample file to the `design-plan/admin` folder for us to upload when editing the entry.

**Sample Edit Data:**

alter the first entry(return to admin view after submitting in the edit form update entry)

  - song_name : depression
  - artist: 4
  - album: 55
  - release_date: Today/ april 24th, 2024
  - genre: pop
  - languages: french
  - file_type: 23.jpeg(provided)

**Sample Upload File:** `design-plan/admin/23.jpeg'



## Contributors

I affirm that I am submitting my work for the administrator requirements in this milestone.

Admin Lead: Troy Corbitt


[← Table of Contents](../design-journey.md)
