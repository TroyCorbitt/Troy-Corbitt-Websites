# Project 3, Milestone 2: **Administrator** Design Journey

[← Table of Contents](../design-journey.md)


## Milestone 1 Feedback Revisions
> Explain what you revised in response to the Milestone 1 feedback (1-2 sentences)
> If you didn't make any revisions, explain why.

milestone feedback revisions

fixed persona face

## Edit Page URL
> Design the URL for the administrator's edit page.
> What is the URL for the administrator's edit page?

/adminedit


> What query string parameters will you include in the URL?

| Query String Parameter Name       | Description       |
| --------------------------------- | ----------------- |
| songid                                | The unique identifier for the id of the song selected, increments|



## SQL Query Plan
> Plan the SQL query to retrieve a record from one of your query string parameters.

```
SELECT * FROM songs WHERE id = :id;

$queryResult->fetchAll();

```

> Plan the SQL query to retrieve all tag names for a specific record.

```
FROM song_tags
INNER JOIN tags ON song_tags.tag_id = tags.id
WHERE song_id = :song_id

$tag_result->fetchAll();

```


## Contributors

I affirm that I am submitting my work for the administrator requirements in this milestone.

Admin Lead: Troy Corbitt


[← Table of Contents](../design-journey.md)
