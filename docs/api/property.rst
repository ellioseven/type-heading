Property
========

th-property
-----------

Since
~~~~~

0.0.10

Source
~~~~~~

.. code-block:: scss

	@function th-property($heading, $property-name, $breakpoint: false, $convert: true, $base-font-size: $th-base-font-size) { 
	  $heading: th-heading($heading, $breakpoint);
	  $property: _th-property-get($heading, $property-name);
	  @if $property-name != font-size {
	    $base-font-size: _th-property-base($heading, $breakpoint, $base-font-size);
	  }
	  @if $property == default or $property == false {
	    $property: _th-property-default($property-name, $base-font-size, false);
	  }
	  @if string == type-of($convert) {
	    $property: th-unit-convert($convert, $property, $base-font-size);
	  } @elseif $convert == true {
	    $property: _th-property-unit-convert-property($property-name, $property, $base-font-size);
	  }
	  @return $property;
	}

Description
~~~~~~~~~~~

Return heading list property value.

Parameters
~~~~~~~~~~

======================================================================================================== ======================================================================================================== ======================================================================================================== ========================================================================================================
Name                                                                                                     Description                                                                                              Type                                                                                                     Default Value                                                                                           
======================================================================================================== ======================================================================================================== ======================================================================================================== ========================================================================================================
heading                                                                                                  A heading map key or list.                                                                               list | string                                                                                                                                                                                                    
property-name                                                                                            (font-size | line-height | margin-top | margin-bottom | breakpoint) A heading property name.             string                                                                                                                                                                                                           
breakpoint                                                                                               A heading list breakpoint.                                                                               number                                                                                                   false                                                                                                   
convert                                                                                                  (true | false | px | em | rem | rel | percent) If returned value should be unit converted or overridden. boolean | string                                                                                         true                                                                                                    
base-font-size                                                                                           Font size used for relative calculations.                                                                number                                                                                                   $th-base-font-size                                                                                      
======================================================================================================== ======================================================================================================== ======================================================================================================== ========================================================================================================

Returns
~~~~~~~

``number`` — Heading property value.

Example
~~~~~~~

Return font size from a h1 heading map.

.. code-block:: scss

	th-property(
	  $heading: h1,
	  $property-name: font-size
	)

Return font size from a h1 heading map with a breakpoint of 768px.

.. code-block:: scss

	th-property(
	  $heading: h1,
	  $property-name: font-size,
	  $breakpoint: 768px
	)

Return font size from a h1 heading map without unit conversion.

.. code-block:: scss

	th-property(
	  $heading: h1,
	  $property-name: font-size,
	  $convert: false
	)

Return font size from a h1 heading map and unit override to percent.

.. code-block:: scss

	th-property(
	  $heading: h1,
	  $property-name: font-size,
	  $convert: percent
	)

Return font size from a h1 with a base font size of 24px.

.. code-block:: scss

	th-property(
	  $heading: h1,
	  $property-name: font-size,
	  $base-font-size: 24px
	)

Requires
~~~~~~~~

* ``th-heading``

Used By
~~~~~~~

* [function] ``th-p``

* [mixin] ``th-property``

Since
~~~~~

0.0.10

th-p
----

Since
~~~~~

0.0.15

Source
~~~~~~

.. code-block:: scss

	@function th-p() { 
	  @return th-property(
	    $property-name: $property-name,
	    $heading: $heading,
	    $breakpoint: $breakpoint,
	    $convert: $convert,
	    $base-font-size: $base-font-size
	  );
	}

Description
~~~~~~~~~~~

Alias to th-property() function.

Requires
~~~~~~~~

* ``th-property``

Since
~~~~~

0.0.15

th-property
-----------

Since
~~~~~

0.0.14

Source
~~~~~~

.. code-block:: scss

	@mixin th-property($heading, $property-name, $breakpoint: false, $convert: true, $base-font-size: $th-base-font-size) { 
	  @if font-size != $property-name {
	    $base-font-size: _th-property-base(
	      $heading,
	      $breakpoint,
	      $base-font-size
	    );
	  }
	  #{$property-name}: th-property(
	    $property-name: $property-name,
	    $heading: $heading,
	    $breakpoint: $breakpoint,
	    $convert: $convert,
	    $base-font-size: $base-font-size
	  );
	}

Description
~~~~~~~~~~~

Output heading property style.

Parameters
~~~~~~~~~~

======================================================================================================== ======================================================================================================== ======================================================================================================== ========================================================================================================
Name                                                                                                     Description                                                                                              Type                                                                                                     Default Value                                                                                           
======================================================================================================== ======================================================================================================== ======================================================================================================== ========================================================================================================
heading                                                                                                  A heading map key or list.                                                                               list | string                                                                                                                                                                                                    
property-name                                                                                            (font-size | line-height | margin-top | margin-bottom | breakpoint) A heading property name.             string                                                                                                                                                                                                           
breakpoint                                                                                               A heading list breakpoint.                                                                               number                                                                                                   false                                                                                                   
convert                                                                                                  (true | false | px | em | rem | rel | percent) If returned value should be unit converted or overridden. boolean | string                                                                                         true                                                                                                    
base-font-size                                                                                           Font size used for relative calculations.                                                                number                                                                                                   $th-base-font-size                                                                                      
======================================================================================================== ======================================================================================================== ======================================================================================================== ========================================================================================================

Example
~~~~~~~

Output h1 font size styles.

.. code-block:: scss

	@include th-property-font-size(h1)

Output h1 font size styles with 768px breakpoint.

.. code-block:: scss

	@include th-property-font-size(
	  $heading: h1,
	  $breakpoint: 768px
	)

Output h1 font size styles without unit conversion.

.. code-block:: scss

	@include th-property(
	  $heading: h1,
	  $property-name: font-size,
	  $convert: false
	)

Output h1 font size styles and unit override to percent.

.. code-block:: scss

	@include th-property(
	  $heading: h1,
	  $property-name: font-size,
	  $convert: percent
	)

Output h1 font size styles with a base font size of 24px.

.. code-block:: scss

	@include th-property(
	  $heading: h1,
	  $property-name: font-size,
	  $base-font-size: 24px
	)

Requires
~~~~~~~~

* ``th-property``

Used By
~~~~~~~

* [mixin] ``th-heading``

* [mixin] ``th-p``

Since
~~~~~

0.0.14

th-p
----

Since
~~~~~

0.0.15

Source
~~~~~~

.. code-block:: scss

	@mixin th-p() { 
	  @include th-property(
	    $property-name: $property-name,
	    $heading: $heading,
	    $breakpoint: $breakpoint,
	    $convert: $convert,
	    $base-font-size: $base-font-size
	  );
	}

Description
~~~~~~~~~~~

Alias to th-property() mixin.

Requires
~~~~~~~~

* ``th-property``

Since
~~~~~

0.0.15