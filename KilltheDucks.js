

var direction_scan;
var direction_swim;

direction_swim = 0
direction_scan = 0;
var i = 0;
while (i < 500) {
  if (loc_x() < 25) {
    swim(0,100);
  } else {
    if (loc_x() > 75) {
      swim(180,100);
    }
  }
  
  while (scan(direction_scan) > 70) {
    direction_scan = direction_scan + 5;
  }
  cannon(direction_scan, scan(direction_scan));
  i++
}
swim(direction_scan, 100);
while(true)
{

  while (scan(direction_scan) > 280) {
    direction_scan = direction_scan + 5;
  }
  cannon(direction_scan, scan(direction_scan));
  swim(direction_scan, 100)
  
}
