# Project 3, Milestone 3: **Consumer** Design Journey

[← Table of Contents](../design-journey.md)


## Milestone 2 Feedback Revisions
> Explain what you individually revised in response to the Milestone 1 feedback (1-2 sentences)
> If you didn't make any revisions, explain why.

Fixed the method to link the view all and detail page.


## Insert Form - INSERT query
> Plan your query to insert an entry in your catalog.

```sql
INSERT INTO songs (ranking, song_name, artist, album, release_date, genre, languages, file_path, file_type)
VALUES (:ranking, :song_name, :artist, :album, :release_date, :genre, :languages, :file_path, :file_type);
```



## Insert Form - Sample Test Data
> Document sample test data to insert an entry in your catalog.
> Upload a sample file to the `design-plan/consumer` folder for us to upload when inserting the entry.

**Sample Insert Data:**
  - song_name : Next Monday
  - artist: Madonna (any option)
  - album: Beneath the Velvet Sky (any option) (optional),
  - release_date: (select any date) (optional),
  - genre: Pop (optional),
  - languages: English (optional),
  - Tag: Live (any option) (optional),
  - Tag: Chill (any option) (optional),
  - Tag: Jazz (any option) (optional),


**Sample Upload File:** `design-plan/consumer/21.jpeg`
<!-- Source: https://www.pinterest.com/pin/26388347809394876/ -->


## Contributors

I affirm that I am submitting my work for the consumer requirements in this milestone.

Consumer Lead: Xiaoxin Li


[← Table of Contents](../design-journey.md)
