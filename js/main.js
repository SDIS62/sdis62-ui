// =======================================================================
// Comportement du DOM avec jQuery
// =======================================================================
$(document).ready(function() {

    // =======================================================================
    // Activation de tablesorter pour les table contenant la classe .tablesorter
    // =======================================================================

    $("table.tablesorter").tablesorter({theme: 'bootstrap2'});

    // =======================================================================
    // Activation de chosen pour les select contenant la classe .chosen
    // =======================================================================

    $("select.chosen").chosen();

});