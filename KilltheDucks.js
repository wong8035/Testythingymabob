var direction;


direction = 0;
while (true) {
  if (loc_x() < 25) {
    swim(0);
  } else {
    if (loc_x() > 75) {
      swim(180);
    }
  }
  
  while (scan(direction) > 280) {
    direction = direction + 5;
  }
  cannon(direction, scan(direction));
}
