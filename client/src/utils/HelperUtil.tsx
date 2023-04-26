

//Sortin 

export const Sorting = ({ value, sort,}: {value: string; sort: string;}) => {
  if (value === "jorneys") {
    return (a: any, b: any) => {
      if (sort === "Longes Distance") return b.Covered_distance_m - a.Covered_distance_m;
      if (sort === "Shortest Distance") return a.Covered_distance_m - b.Covered_distance_m;
      if (sort === "Longest Duration") {
        for (let i in a.Duration_sec) {
          return b.Duration_sec[i] - a.Duration_sec[i];
        }}
      if (sort === "Shortest Duration") {
        for (let i in a.Duration_sec) {
          return a.Duration_sec[i] - b.Duration_sec[i];
        }}
    };
  }
};

//Time Converter from seconds to hours, minutes, seconds

export const TimeConverter = (Duration_sec:any) => {
  let fixDuration;
  let duration;
  for (let i in Duration_sec) {
    fixDuration = Duration_sec[i];
    let h = Math.floor(fixDuration / 3600);
    let m = Math.floor((fixDuration % 3600) / 60);
    let s = Math.floor((fixDuration % 3600) % 60);
    let hDisplay = h > 0 ? h + (h === 1 ? " hour, " : " hours, ") : "";
    let mDisplay = m > 0 ? m + (m === 1 ? " minute, " : " minutes, ") : "";
    let sDisplay = s > 0 ? s + (s === 1 ? " second" : " seconds") : "";
    duration = hDisplay + mDisplay + sDisplay;
  }
  return duration
}


