# Project 3, Milestone 3: **Team** Design Journey

[← Table of Contents](design-journey.md)

**Make the case for your decisions using concepts from class, as well as other design principles, theories, examples, and cases from outside of class (includes the design prerequisite for this course).**

You can use bullet points and lists, or full paragraphs, or a combo, whichever is appropriate. The writing should be solid draft quality.


## Milestone 2 Team Feedback Revisions
> Explain what your **team** collectively revised in response to the Milestone 2 feedback (1-2 sentences)
> If you didn't make any revisions, explain why.

No revisons, since we have no feedback at this time


## File Upload - Types of Files
> What types of files will you allow users to upload?
> Can users upload any type of file? Can user only upload one type of file?
> Or can users upload several different types of files?
> List the file extensions of the types of files your users may upload.

Only logged-in admin are allowed to upload song or album covers

enctype="multipart/form-data"

- .jpeg
- .jpg
- .png


## File Upload - Updated DB Schema
> Plan any updates you need to make to your database schema to support file uploads.
>
> 1. Copy your Project 3 DB Schema for the _entries_ table here.
> 2. Modify the schema to include any file upload information you desire to store in your database.
>    If you don't need to modify anything, explain why.

```

CREATE TABLE songs (
  id INTEGER NOT NULL UNIQUE,
  ranking INTEGER NOT NULL,
  song_name TEXT NOT NULL,
  artist INTEGER NOT NULL,
  album INTEGER,
  release_date TEXT,
  genre TEXT,
  languages TEXT,
  PRIMARY KEY(id AUTOINCREMENT)
);


(modified)
CREATE TABLE songs (
  id INTEGER NOT NULL UNIQUE,
  ranking INTEGER NOT NULL,
  song_name TEXT NOT NULL,
  artist INTEGER NOT NULL,
  album INTEGER,
  release_date TEXT,
  genre TEXT,
  languages TEXT,
  file_path TEXT,
  file_type TEXT,
  PRIMARY KEY(id AUTOINCREMENT)
);

```


## File Upload - File Storage
> Plan the file path to store the uploaded files on the server's file system.
> Store the uploaded files in a subfolder of the `public/uploads` folder using the entries table name as the subfolder name.

file path to store uploaded media files for entries



## File Upload - Path and URL
> Assume that a user completed the insert/edit entry form.
> The **id** for the new record is **154**.
>
> 1. Plan the file system path to store the uploaded file.
> 2. Plan the URL to load the uploaded file in your website's HTML.

**File System Storage Path:**

```
public/uploads/songs/

```

**Resource URL:**

```
<picture>
  <img src="/public/uploads/songs/mp3" alt="Song">
</picture>


```


## File Upload - Form Input
> Write the HTML of an `<input>` element that allows users to upload a file.

```html

<input type="file" id="songFile" name="songFile">

```


## File Upload - PHP File Upload Data
> Use the `name` attribute of the file input you planned above to plan how you will
> access the uploaded file data in PHP using the `$_FILES` superglobal.

> Write the PHP code to access the uploaded file data from the `$_FILES` superglobal.
> Only include the data you will extract from the `$_FILES` superglobal. For example, the file name.
> Hint: <https://www.php.net/manual/en/features.file-upload.post-method.php>

```
$_FILES['songFile']['name'];
```


## Filtering by a Tag - Query String Parameters
> Plan the query string for filtering by a tag for the "view all" pages.
> (This plan should be exactly the same for both the consumer and admin views.)
> Include the query string parameter and its value.
> Document the value with the field from your database in all CAPITOL letters.

Example: `?category=ID` where `ID` is the `id` field from the `categories` table.

`?tag=ID` where `ID` is the `id` field from the `tags` table.



## Filtering by a Tag - SQL Query Plan
> Plan the SQL query to retrieve all entries with a specific tag using the query string parameter.

```

SELECT songs.*
FROM songs
JOIN song_tags ON song_tags.song_id = songs.id
JOIN tags ON song_tags.tag_id = tags.id
WHERE song_tags.tag_id = :tag_id;

```


## Contributors

I affirm that I have contributed to the team requirements for this milestone.

Consumer Lead: Xiaoxin Li

Admin Lead: Troy Corbitt

[← Table of Contents](design-journey.md)
