using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using GercStudio.USK.Scripts;


public class lader : MonoBehaviour
{
	public bool playerinside=false;
	public Controller playercontrler;
	public bool playermoving=false;
	public Transform elivater;
	public float elivaterspeed=1;
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
	    playermoving=playercontrler.hasMoveButtonPressed;
    }
	// OnTriggerStay is called once per frame for every Collider other that is touching the trigger.
	protected void OnTriggerStay(Collider guest)
	{
		if (guest.tag=="Player")
			if (playerinside==true)
				if (playermoving==true)
					elivater.Translate(0,0,1*Time.deltaTime*elivaterspeed);
	}
	// OnTriggerEnter is called when the Collider other enters the trigger.
	protected void OnTriggerEnter(Collider guest)
	{
		if (guest.tag=="Player")
		    playerinside=true;
	}
	// OnTriggerExit is called when the Collider other has stopped touching the trigger.
	protected void OnTriggerExit(Collider guest)
	{
		if (guest.tag=="Player")
			playerinside=false;
	}
}
