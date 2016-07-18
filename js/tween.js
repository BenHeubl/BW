d3.selectAll(".bar text")
    .transition()
    .duration(600)
    .tween("text", function(d) {
              var re = /(\d+)%/;
              var meta_array = re.exec(this.textContent);
              var just_number = meta_array[1];
              if (just_number.substring(0,1) == "<") {
                just_number = just_number.substring(1);
              }

              var i = d3.interpolate(just_number, d[CURR_GROUP]);
              return function(t) {
                if (i(t) < 1) {
                  this.textContent = "<1%";
                } else {
                  this.textContent = Math.round(i(t)) + "%";
                }
              }
            });
}
