var count = 0;
function cc(card) {
  if (card <= 6){
    count++;
  }
  else if (card >= 10){
    count--;
  }
  else {
    count += 0;
  } 
  return count;
}

cc(2); 
cc("K"); 
cc(7); 
cc('K'); 
cc('A');
