var fireBall : GameObject;
var shootPoint : Transform;

function Update () {
  if(Input.GetButton("Fire P1")) {
    var shot : GameObject = Instantiate(fireBall, shootPoint.position, shootPoint.rotation);
    shot.GetComponent(Rigidbody).velocity = 100.0 * shootPoint.forward;
  }
}
