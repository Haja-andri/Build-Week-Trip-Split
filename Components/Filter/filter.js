class FilterLink {
  constructor(filterElement){
    // assign this.filterElement to the filterElement DOM reference
    this.filterElement = filterElement;
    console.log(this.filterElement);

    // Get the `data-tab` value from this.filterElement and store it here
    this.filterData = this.filterElement.dataset.tab; 

    // We need to find out if a user clicked 'all' cards or a specific category.  
    // Add a click event that invokes this.selectFilter
    this.filterElement.addEventListener('click', this.selectFilter.bind(this));
  }

  selectFilter(){
    // Select all elements with the .tab class on them
    const filters = document.querySelectorAll('.filter');
    
    // Iterate through the NodeList removing the .active-filter class from each element
    filters.forEach(filter =>{
      filter.classList.remove('active-filter');
    })

    // Select all of the person elements with the .card class on them
    const cards = document.querySelectorAll('.card');

    // Iterate to display style each one to 'none'
    cards.forEach(card =>{
      card.style.display = 'none';
    })
    
    // Add a class of ".active-filter" to this.filterElement
    this.filterElement.classList.add('active-filter');

    // Check to see if this.filterData is equal to 'all'
    if(this.filterData == 'all'){
      // If `all` is true, select all cards regardless of their data attribute values
      this.cards = document.querySelectorAll('.card');
    } else {
      // else if `all` is false, only select the cards with matching this.filterData values
      this.cards = document.querySelectorAll(`.card[data-tab="${this.filterData}"]`);
    }
     // Convert each this.cards element into a new instance of the TabFilter class.
     // Pass in a card object to the TabFilter class. 
    this.cards = Array.from(this.cards);
    this.TabFilter = new TabFilter(this.cards);
    
    // invoking selectCard() from the TabFilter class. 
    this.cards.forEach(person => {
      this.TabFilter.selectCard(person); 
    });
  }
}

class TabFilter {
  constructor(cardElement){
    // Assign this.cardElement to the cardElement DOM reference
    this.cardElement = cardElement;
  }
  selectCard(person){
    // Update the style of this.cardElement to display = "flex"
    person.style.display = 'flex';
  }

}

/// We start by pulling in all fillters in a NodeList ///

let filters = document.querySelectorAll('.filter');

filters.forEach(filter => {
  new FilterLink(filter);
})