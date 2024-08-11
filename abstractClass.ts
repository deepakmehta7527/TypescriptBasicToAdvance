/*
->when you create abstract class then you couldn't access directly with there class object
->but abstract class help to define who have inheritence of class that class structure defined very well
->if you don't want class should be overwrite then also used abstract class

*/


abstract class TakePhoto {
  constructor(
      public cameraMode: string,
      public filter: string
  ){}

  abstract getSepia(): void
  getReelTime(): number{
      //some complex calculation
      return 8
  }
}


class Instagram extends TakePhoto{
  constructor(
      public cameraMode: string,
      public filter: string,
      public burst: number
      ){
          super(cameraMode, filter)
      }

      getSepia(): void {
          console.log("Sepia");

      }
}

const hc = new Instagram("test", "Test", 3)

hc.getReelTime()