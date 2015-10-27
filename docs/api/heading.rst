Heading
=======

th-heading
----------

Since
~~~~~

0.0.10

Source
~~~~~~

.. code-block:: scss

	@function th-heading($heading, $breakpoint: false) { 
	  $breakpoint: _th-core-breakpoint-context($breakpoint);
	  $heading: th-heading-get-map($heading);
	  @if _th-heading-has-next($heading) {
	    $heading: _th-heading-get-next($heading, $breakpoint);
	  }
	  @return $heading;
	}

Description
~~~~~~~~~~~

Return a heading list. The first heading list will be returned
if no breakpoint is specified.

Parameters
~~~~~~~~~~

========================== ========================== ========================== ==========================
Name                       Description                Type                       Default Value             
========================== ========================== ========================== ==========================
heading                    A heading map key or list. list | string                                        
breakpoint                 A heading list breakpoint. number                     false                     
========================== ========================== ========================== ==========================

Returns
~~~~~~~

``list`` — A heading list.

Example
~~~~~~~

Return a heading list.

.. code-block:: scss

	th-heading(h1)
	// (10px 20px (30px 40px)

Return a heading list with breakpoint.

.. code-block:: scss

	th-heading(h1, 768px)
	// 50px 60px (70px 80px) 768px

Requires
~~~~~~~~

* ``th-heading-get-map``

Used By
~~~~~~~

* [mixin] ``th-heading``

* [function] ``th-property``

* [mixin] ``th-property-font-size``

* [mixin] ``th-property-line-height``

* [mixin] ``th-property-margin-top``

* [mixin] ``th-property-margin-bottom``

Since
~~~~~

0.0.10

th-heading-get-map
------------------

Since
~~~~~

0.0.10

Source
~~~~~~

.. code-block:: scss

	@function th-heading-get-map($heading) { 
	  @if string == type-of($heading) and map-has-key($th-headings, $heading) {
	    $heading: map-get($th-headings, $heading);
	  }
	  @return $heading;
	}

Description
~~~~~~~~~~~

Return a heading map.

Parameters
~~~~~~~~~~

================== ================== ================== ==================
Name               Description        Type               Default Value     
================== ================== ================== ==================
heading            A heading map key. string                               
================== ================== ================== ==================

Returns
~~~~~~~

``list`` — A heading map.

Example
~~~~~~~

Return h1 heading map.

.. code-block:: scss

	th-heading-get-map(h1)
	// 10px 20px (30px 40px), 50px 60px (70px 80px) 768px

Requires
~~~~~~~~

* ``th-headings``

Used By
~~~~~~~

* [mixin] ``th-with``

* [function] ``th-heading``

Since
~~~~~

0.0.10

th-heading
----------

Since
~~~~~

0.0.10

Source
~~~~~~

.. code-block:: scss

	@mixin th-heading($heading, $breakpoint: false, $base-font-size: $th-base-font-size, $include: false) { 
	  $breakpoint: _th-core-breakpoint-context($breakpoint);
	  @include th-with-breakpoint($breakpoint) {
	    $heading: th-heading($heading, $breakpoint);
	    $font-size: th-property-font-size(
	      $heading: $heading,
	      $base-font-size: $base-font-size,
	      $convert: false
	    );
	    @each $property in $_th-core-properties {
	      @if not $include or th-list-has($include, $property) {
	        @include th-property(
	          $property-name: $property,
	          $heading: $heading,
	          $base-font-size: th-if(font-size == $property, $base-font-size, $font-size)
	        );
	      }
	    }
	  }
	}

Description
~~~~~~~~~~~

Output styles for a heading list.

Parameters
~~~~~~~~~~

================================================================================== ================================================================================== ================================================================================== ==================================================================================
Name                                                                               Description                                                                        Type                                                                               Default Value                                                                     
================================================================================== ================================================================================== ================================================================================== ==================================================================================
heading                                                                            A heading map key.                                                                 string                                                                                                                                                               
breakpoint                                                                         A heading list breakpoint.                                                         number | boolean                                                                   false                                                                             
base-font-size                                                                     Font size used for relative calculations.                                          number                                                                             $th-base-font-size                                                                
include                                                                            (font-size | line-height | margin-top | margin-bottom) Restrict output properties. list | boolean                                                                     false                                                                             
================================================================================== ================================================================================== ================================================================================== ==================================================================================

Example
~~~~~~~

Output h1 styles.

.. code-block:: scss

	th-heading(h1)

Output h1 styles with 768px breakpoint.

.. code-block:: scss

	th-heading(
	  $heading: h1,
	  $breakpoint: 768px
	)

Output h1 styles with a base font size of 48px.

.. code-block:: scss

	th-heading(
	  $heading: h1,
	  $base-font-size: 48px
	)

Output h1 styles but only include font-size and line-height.

.. code-block:: scss

	th-heading(
	  $heading: h1,
	  $include: (font-size line-height)
	)

Requires
~~~~~~~~

* ``th-with-breakpoint``

* ``th-property``

* ``th-heading``

* ``th-property-font-size``

Used By
~~~~~~~

* [mixin] ``th-headings``

Since
~~~~~

0.0.10

th-headings
-----------

Since
~~~~~

0.0.10

Source
~~~~~~

.. code-block:: scss

	@mixin th-headings($heading, $base-font-size, $include: false) { 
	  $loop: 1;
	  @include _th-heading-loop($heading) {
	    @include th-heading(
	      $heading: $heading,
	      $base-font-size: $base-font-size,
	      $include: $include
	    );
	    $loop: $loop + 1;
	  }
	}

Description
~~~~~~~~~~~

Output styles for a heading across all breakpoints.

Parameters
~~~~~~~~~~

================================================================================== ================================================================================== ================================================================================== ==================================================================================
Name                                                                               Description                                                                        Type                                                                               Default Value                                                                     
================================================================================== ================================================================================== ================================================================================== ==================================================================================
heading                                                                            A heading map key or list.                                                         list | string                                                                                                                                                        
base-font-size                                                                     ($th-base-font-size) Font size used for relative calculations.                     number                                                                                                                                                               
include                                                                            (font-size | line-height | margin-top | margin-bottom) Restrict output properties. list | boolean                                                                     false                                                                             
================================================================================== ================================================================================== ================================================================================== ==================================================================================

Example
~~~~~~~

Output all h1 styles across all breakpoints.

.. code-block:: scss

	@include th-headings(h1)

Output font-size and line-height h1 styles across all breakpoints.

.. code-block:: scss

	th-headings(
	  $heading: h1,
	  $include: (font-size line-height)
	)

Requires
~~~~~~~~

* ``th-heading``

Since
~~~~~

0.0.10