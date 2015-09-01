<?php
 ini_set('display_errors', 'On');
// Define some constants
define( "RECIPIENT_NAME", "Ryan Hirst" );
define( "RECIPIENT_EMAIL", "r.hirst18@gmail.com" );
define( "EMAIL_SUBJECT", "RyanHirst.com message" );
 
// Read the form values
$success = false;
$senderName = isset( $_GET['senderName'] ) ? preg_replace( "/[^\.\-\' a-zA-Z0-9]/", "", $_GET['senderName'] ) : "";
$senderEmail = isset( $_GET['senderEmail'] ) ? preg_replace( "/[^\.\-\_\@a-zA-Z0-9]/", "", $_GET['senderEmail'] ) : "";
$message = isset( $_GET['message'] ) ? preg_replace( "/(From:|To:|BCC:|CC:|Subject:|Content-Type:)/", "", $_GET['message'] ) : "";
 
// If all values exist, send the email
if ( $senderName && $senderEmail && $message ) {
  $recipient = RECIPIENT_NAME . " <" . RECIPIENT_EMAIL . ">";
  $headers = "From: " . $senderName . " <" . $senderEmail . ">";
  $success = mail( $recipient, EMAIL_SUBJECT, $message, $headers );
}
 
// Return an appropriate response to the browser
if ( isset($_GET["ajax"]) ) {
  echo $success ? "success" : "error";
} else {
?>
<html>
  <head>
    <title>Thanks!</title>
  </head>
  <body>
  <?php if ( $success ) echo "<p>Thanks for sending your message! We'll get back to you shortly.</p>" ?>
  <?php if ( !$success ) echo "<p>There was a problem sending your message. Please try again.</p>" ?>
  <p>Click your browser's Back button to return to the page.</p>
  </body>
</html>
<?php
}
?>