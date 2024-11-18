<?php
$page_title = "Home";

$filter_param = $_GET["tag"] ?? NULL;

$sql_select_clause = "SELECT songs.id AS 'songs.song_id',
  songs.ranking AS 'songs.ranking',
  songs.song_name AS 'songs.song_name',
  songs.artist AS 'songs.artist',
  songs.file_type AS 'songs.file_type'
  FROM songs
  JOIN song_tags ON songs.id = song_tags.song_id
  JOIN tags ON song_tags.tag_id = tags.id";

$params = [];

if ($filter_param) {
  $sql_filter_clause = " WHERE tags.id = :tag_id";
  $params[':tag_id'] = $filter_param;
} else {
  $sql_filter_clause = "";
}

$sql_select_query = $sql_select_clause . $sql_filter_clause . " GROUP BY songs.id ORDER BY songs.ranking ASC;";
$result = exec_sql_query($db, $sql_select_query, $params);
$records = $result->fetchAll();
?>

<!DOCTYPE html>
<html lang="en">

<!-- <header> -->
<?php include "includes/keyvalue.php"; ?>
<?php include "includes/meta.php"; ?>
<?php include "includes/header.php"; ?>

<!-- <?php if (is_user_logged_in()) { ?> -->
  <!-- <a href="/adminview" class="admin-link">Admin View Page</a>
    <a href="/admininsert" class="admin-link">Admin Insert Page</a>
    <a href="<?php echo logout_url(); ?>" class="logout-link">Log Out</a>
<!-- <?php } ?>  -->


  </header>

  <body>

    <h1>Hot 20 Songs of 2023</h1>

    <section class="con-pages">
      <aside>
        <p class="con-filter-title"><strong>Filter by Tag</strong></p>
        <section class="con-filter">
          <?php
          $tag_result = exec_sql_query(
            $db,
            "SELECT id, name FROM tags ORDER BY name ASC;"
          );
          foreach ($tag_result->fetchAll() as $tag) {
            $page = "/?" . http_build_query(['tag' => $tag['id']]);
            echo '<a href="' . htmlspecialchars($page) . '" class="con-filter-button">' . htmlspecialchars($tag['name']) . '</a>';
          }
          ?>
        </section>
      </aside>

      <ul class="con-ul">
        <?php
        $chunks = array_chunk($records, 3);
        foreach ($chunks as $chunk) {
          include "includes/con-chunk.php";
        }
        ?>
      </ul>

    </section>

  </body>

</html>
<!-- Source: (original work) Xiaoxin Li -->
