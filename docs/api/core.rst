Core
====

th-with-get
-----------

Since
~~~~~

0.0.14

Source
~~~~~~

.. code-block:: scss

	@function th-with-get($property-name) { 
	  @if $_th-core-with {
	    @return map-get($_th-core-with, $property-name);
	  }
	}

Description
~~~~~~~~~~~

Return a heading property value within a th-with loop.

Parameters
~~~~~~~~~~

======================================= ======================================= ======================================= =======================================
Name                                    Description                             Type                                    Default Value                          
======================================= ======================================= ======================================= =======================================
property-name                           Name of the heading property to return. string                                                                         
======================================= ======================================= ======================================= =======================================

Returns
~~~~~~~

``number`` — Heading property value.

Example
~~~~~~~

Return font size from within a th-with loop.

.. code-block:: scss

	@include th-with(h1) {
	  font-size: th-with-get(font-size);
	}
	// font-size: 18px;

Requires
~~~~~~~~

Since
~~~~~

0.0.14

th-with-breakpoint
------------------

Since
~~~~~

0.0.12

Source
~~~~~~

.. code-block:: scss

	@mixin th-with-breakpoint($breakpoint) { 
	  $cache: $_th-core-breakpoint-context;
	  $_th-core-breakpoint-context: $breakpoint !global;
	  @content;
	  $_th-core-breakpoint-context: $cache !global;
	}

Description
~~~~~~~~~~~

Use a breakpoint for a section of code.

Parameters
~~~~~~~~~~

========================== ========================== ========================== ==========================
Name                       Description                Type                       Default Value             
========================== ========================== ========================== ==========================
breakpoint                 A heading list breakpoint. number                                               
========================== ========================== ========================== ==========================

Content
~~~~~~~

This mixin allows extra content to be passed (through the ``@content`` directive).

Example
~~~~~~~

Output a heading with a 768px breakpoint.

.. code-block:: scss

	@include th-with-breakpoint(768px) {
	  @include th-heading(h1);
	}

Requires
~~~~~~~~

Used By
~~~~~~~

* [mixin] ``th-breakpoint``

* [mixin] ``th-heading``

Since
~~~~~

0.0.12

th-with
-------

Since
~~~~~

0.0.14

Source
~~~~~~

.. code-block:: scss

	@mixin th-with($heading, $convert: false, $base-font-size: $th-base-font-size) { 
	  @include _th-heading-loop($heading) {
	    @include _th-with-var-set($heading, $convert, $base-font-size);
	    @content;
	    @include _th-with-var-reset;
	  }
	}

Description
~~~~~~~~~~~

Loop through a headings breakpoints with access to it's
property values as a global variable. $th-font-size, $th-line-height,
$th-margin-top, $th-margin-bottom will become available to you within the
mixin.

Parameters
~~~~~~~~~~

=========================================== =========================================== =========================================== ===========================================
Name                                        Description                                 Type                                        Default Value                              
=========================================== =========================================== =========================================== ===========================================
heading                                     A heading map key or list.                  list | string                                                                          
convert                                     If returned value should be unit converted. boolean                                     false                                      
base-font-size                              Font size used for relative calculations.   number                                      $th-base-font-size                         
=========================================== =========================================== =========================================== ===========================================

Content
~~~~~~~

This mixin allows extra content to be passed (through the ``@content`` directive).

Role: [Styles for the contextual heading list]

Example
~~~~~~~

Output font-size, line-height, margin-top and margin-bottom properties individually for a heading.

.. code-block:: scss

	@include th-with(h1) {
	  margin-top: th-with-get(margin-top);
	  margin-bottom: th-with-get(margin-bottom);
	  font-size: th-with-get(font-size);;
	  line-height: th-with-get(line-height);
	}

Requires
~~~~~~~~

Since
~~~~~

0.0.14