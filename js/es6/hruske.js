"use strict";

$(document).ready(() => {
    $.get('api/applications')
    .success((applications) => {
        applications = _.groupBy(applications, 'Type');

        $('#wedding').DataTable( {
            data: applications.wedding,
            columns: [
                { data: "Id" },
                { data: "Name" },
                { data: "Remarks" },
                { data: "TimeApplied" }
            ]
        } );


        $('#baking').DataTable( {
            data: applications.baking,
            columns: [
                { data: "Id" },
                { data: "Name" },
                { data: "Remarks" },
                { data: "Phone" },
                { data: "TimeApplied" }
            ]
        } );


        $('#room').DataTable( {
            data: applications.room,
            columns: [
                { data: "Id" },
                { data: "Name" },
                { data: "Remarks" },
                { data: "Phone" },
                { data: "TimeApplied" }
            ]
        } );
    });
});