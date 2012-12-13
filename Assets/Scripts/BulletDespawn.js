#pragma strict

var bulletLifetime : float;

private var spawnTime : float;

function OnCollisionEnter(collision : Collision) {
  if (collision.gameObject.tag == "Player") {
    var ray : Ray = new Ray(transform.position, GetComponent(Rigidbody).velocity.normalized);
    var hit : RaycastHit = new RaycastHit();
    hit.point = collision.contacts[0].point;
    collision.gameObject.SendMessage("OnHit", SendMessageOptions.DontRequireReceiver);
  }
}

function Start () {
  spawnTime = Time.fixedTime;
}

function Update () {
  if (Time.fixedTime - spawnTime > bulletLifetime) {
    Destroy(gameObject);
  }
}