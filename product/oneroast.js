$(document).ready(function () {
  // Get the select element with the class of "shopify-buy__option-select__select"
  // Get the element with the id of "element"
  const element = $("#element");

  // Add an event listener to the select element to listen for changes
  $(".shopify-buy__option-select__select").on("change", function () {
    // Get the selected option value
    const selectedOption = $(".shopify-buy__option-select__select").val();

    // Check the value of the selected option and update the content of the element accordingly
    if (selectedOption === "Small") {
      element.text("small");
    } else if (selectedOption === "Medium") {
      element.text("medium");
    } else if (selectedOption === "Large") {
      element.text("large");
    }
  });
});
