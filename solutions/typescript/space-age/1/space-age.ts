export default class SpaceAge{
  readonly seconds: number
  static EARTH_YEAR_IN_SECONDS = 31557600

  constructor(seconds:number){
    this.seconds=seconds
  }

  private calculate(factorOfConversion:number):number{
    return Number((this.seconds /(SpaceAge.EARTH_YEAR_IN_SECONDS * factorOfConversion)).toFixed(2))
  }

  public onMercury():number{
    return this.calculate(0.2408467)
  }

  public onVenus():number{
    return this.calculate(0.61519726)
  }

  public onEarth():number{
    return this.calculate(1.0)
  }

  public onMars():number{
    return this.calculate(1.8808158)
  }

  public onJupiter():number{
    return this.calculate(11.862615)
  }

  public onSaturn():number{
    return this.calculate(29.447498)
  }

  public onUranus():number{
    return this.calculate(84.016846)
  }

  public onNeptune():number{
    return this.calculate(164.79132)
  }
}
