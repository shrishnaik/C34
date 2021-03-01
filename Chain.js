class CHAIN{
    constructor(bodyA,pointB){
        var option={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:200
            

        }
        this.pointB=pointB
        this.sling=Constraint.create(option)
        World.add(world,this.sling)
    }
    
    display(){
      


        
       var pointA=this.sling.bodyA.position
       var pointB=this.pointB
       line (pointA.x,pointA.y,pointB.x,pointB.y)

}
}