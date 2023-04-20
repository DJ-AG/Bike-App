const TimeConverter = (Duration_sec:any) => {
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

export default TimeConverter