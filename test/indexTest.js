let circle;
let triangle;
let square;



describe( "Polygon", () => {
  beforeEach( () => {
    polygon = new Polygon( [ 5, 5, 5 ] )
  } )

  it( "has a Polygon class", () => {
    expect( Polygon ).to.exist
  } )
  it( "Polygon has a sides property", () => {
    expect( polygon.sides ).to.have.all.members( [ 5, 5, 5 ] )
  } )

  // count should be a getter
  it( "Polygon has a count getter that counts the sides of the polygon", () => {
    expect( polygon.count ).to.exist
    expect( polygon.count ).to.eq( 3 )
  } )

  // this is an interesting thing - what happens if count is set to more than the number of sides?
  // we could definitely include this but maybe we just keep it simple and use a count getter only
  it( "Polygon has a count setter method that sets the count of the sides of the polygon", () => {
    expect( polygon.count ).to.eq( 3 )
  } )

  //perimeter should be a getter
  it( "Polygon has a perimeter getter that calculates perimeter", () => {
    expect( polygon.perimeter ).to.eq( 15 )
  } )
} )

describe( "Triangle", () => {
  it( "has a Triangle class", () => {
    expect( Triangle ).to.exist
  } )

  it( "checks for valid triangle", () => {
    var triangle = new Triangle( [ 5, 5, 5 ] )
    var triangle2 = new Triangle( [ 15, 10, 1 ] )

    expect( triangle.count ).to.eq( 3 )

    //isValid can be a getter too
    expect( triangle.isValid ).to.be.true
    expect( triangle2.isValid ).to.be.false
  } )

  it( "has a perimeter getter inherited from Polygon", () => {
    expect( polygon.perimeter ).to.eq( 15 )
  } )

  //should also include check for inherited count getter method
} )


describe( "Square", () => {
  it( "has a Square class", () => {
    expect( Square ).to.exist
  } )

  it( "has a perimeter getter inherited from Polygon", () => {
    var square = new Square( [ 5, 5, 5, 5 ] )

    expect( square.perimeter ).to.eq( 20 )
  } )

  // check for count getter inheritance as well

  it( "calculates the area", () => {
    var square = new Square( [ 5, 5, 5, 5 ] )

    //to getter
    expect( square.area ).to.eq( 25 )
  } )

  it( "checks for valid square", () => {
    var square = new Square( [ 5, 5, 5, 5 ] )
    var square2 = new Square( [ 5, 4, 3, 2 ] )

    //getters:
    expect( square.count ).to.eq( 4 )
    expect( square.isValid ).to.be.true
    expect( square2.isValid ).to.be.false
  } )
} )