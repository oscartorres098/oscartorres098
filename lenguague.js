// Default Language
$("[language='spanish']").hide();
$(document).ready(function() {
  $("#things").change(function() {
    var selectedLanguage = $(this).val();

    if (selectedLanguage === "1") {
      // English selected
      $("[language='spanish']").hide();
      $("[language='english']").show();
    } else if (selectedLanguage === "2") {
      // Spanish selected
      $("[language='spanish']").show();
      $("[language='english']").hide();
    }
  });
});