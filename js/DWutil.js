/**
 * Created by dwagner6506 on 2/21/2017.
 */

//validate function using jquery validation plugin
function validateInputsAdd()
{
    $('#DWEditFeedbackForm').validate({
        errorElement:'label',
        rules: {
            DWBusNameEdit: {
                required: true,
                minlength: 2,
                maxlength: 20
            },
            DWRevEmailEdit: {
                required: true,
                email : true
            },
            DWReviewDateEdit: {
                required: true
            },
            DWFoodQEdit: {
                range: [0, 5]
            },
            DWServiceEdit: {
                range: [0, 5]
            },
            DWValueEdit: {
                range: [0, 5]
            }

        },
        messages: {
            DWBusNameEdit: {
                required: "Please enter a business name.",
                minlength: "Length must be 2-30 characters long",
                maxlength: "Length must be 2-30 characters long"
            },
            DWRevEmailEdit: {
                required: "Please enter a email.",
                email: "Please enter a valid email"
            },
            DWReviewDateEdit: {
                required: "Please enter a date."
            },
            DWFoodQEdit: {
                range: "Value must be 0-5"
            },
            DWServiceEdit: {
                range: "Value must be 0-5"
            },
            DWValueEdit: {
                range: "Value must be 0-5"
            }
        },
        errorPlacement: function (error, element) {
            error.appendTo(element.parent());

        }

    });


    $('#DWAddForm').validate({
        errorElement:'label',
        rules: {
            DWBusName: {
                required: true,
                minlength: 2,
                maxlength: 20
            },
            DWRevEmail: {
                required: true,
                email : true
            },
            DWReviewDate: {
                required: true
            },
            DWFoodQ: {
                range: [0, 5]
            },
            DWService: {
                range: [0, 5]
            },
            DWValue: {
                range: [0, 5]
            }

        },
        messages: {
            DWBusName: {
                required: "Please enter a business name.",
                minlength: "Length must be 2-30 characters long",
                maxlength: "Length must be 2-30 characters long"
            },
            DWRevEmail: {
                required: "Please enter a email.",
                email: "Please enter a valid email"
            },
            DWReviewDate: {
                required: "Please enter a date."
            },
            DWFoodQ: {
                range: "Value must be 0-5"
            },
            DWService: {
                range: "Value must be 0-5"
            },
            DWValue: {
                range: "Value must be 0-5"
            }
        },
        errorPlacement: function (error, element) {
            error.appendTo(element.parent());

        }

    });
}

//determines overall rating from quality, service and value ratings
//FOR ADDING REVIEWS
function ratingCalc(){


    var foodQlty = document.getElementById('DWFoodQ').value;
    if(foodQlty == "")
        foodQlty = 0;
    var service = document.getElementById('DWService').value;
    if(service == "")
        service = 0;
    var value = document.getElementById('DWValue').value;
    if(value == "")
        value = 0;

    var rating = 0;
    var message = "";

    rating = ((parseInt(foodQlty) + parseInt(service) + parseInt(value)) / 15) * 100;
    rating = Math.round(rating);
    message = rating.toString() + "%";


    document.getElementById('DWOverallRating').value = message;

}

//determines overall rating from quality, service and value ratings
//FOR EDITING REVIEWS
function ratingCalcEdit(){


    var foodQlty = document.getElementById('DWFoodQEdit').value;
    if(foodQlty == "")
        foodQlty = 0;
    var service = document.getElementById('DWServiceEdit').value;
    if(service == "")
        service = 0;
    var value = document.getElementById('DWValueEdit').value;
    if(value == "")
        value = 0;

    var rating = 0;
    var message = "";

    rating = ((parseInt(foodQlty) + parseInt(service) + parseInt(value)) / 15) * 100;
    rating = Math.round(rating);
    message = rating.toString() + "%";


    document.getElementById('DWOverallRatingEdit').value = message;

}

//function to show rating inputs when checkbox clicked
//for both add and edit pages
function showRatings()
{

    var hidden = false;
    var hiddenEdit = false;
    if(hidden == false) {
        $('#DWRatingsDiv').hide();
    }
    if(hiddenEdit == false) {
        $('#DWRatingsDivEdit').hide();
    }


    $('#DWAddRating').on('change', function () {

        if(!$(this).is(':checked')){
            $('#DWRatingsDiv').hide();
            hidden = true;
        }
        else
        {
            $('#DWRatingsDiv').show();
            hidden = false;
        }



    });


    $('#DWAddRatingEdit').on('change', function () {

        if(!$(this).is(':checked')){
            $('#DWRatingsDivEdit').hide();
            hidden = true;
        }
        else
        {
            $('#DWRatingsDivEdit').show();
            hidden = false;
        }



    });




};


//saves default reviewer email to local storage and alerts user it was saved
function saveEmail(){

    $('#DWSettingsForm').on('submit', function () {


       var email =  document.getElementById('DWDefaultRevEmail').value;

       alert(email + " saved as default reviewer email.")
       localStorage.setItem("DefaultEmail", email);


    });


};