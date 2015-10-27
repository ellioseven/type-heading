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
	    $property: th-property-default($property-name, $base-font-size, false);
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

* ``th-property-default``

Used By
~~~~~~~

* [function] ``th-property-font-size``

* [function] ``th-property-line-height``

* [function] ``th-property-margin-top``

* [function] ``th-property-margin-bottom``

* [mixin] ``th-property``

Since
~~~~~

0.0.10

th-property-font-size
---------------------

Since
~~~~~

0.0.10

Source
~~~~~~

.. code-block:: scss

	@function th-property-font-size($heading, $breakpoint: false, $convert: true, $base-font-size: $th-base-font-size) { 
	  @return th-property(
	    $heading: $heading,
	    $property-name: font-size,
	    $breakpoint: $breakpoint,
	    $convert: $convert,
	    $base-font-size: $base-font-size
	  );
	}

Description
~~~~~~~~~~~

Return heading font size value.

Parameters
~~~~~~~~~~

======================================================================================================== ======================================================================================================== ======================================================================================================== ========================================================================================================
Name                                                                                                     Description                                                                                              Type                                                                                                     Default Value                                                                                           
======================================================================================================== ======================================================================================================== ======================================================================================================== ========================================================================================================
heading                                                                                                  A heading map key or list.                                                                               list | string                                                                                                                                                                                                    
breakpoint                                                                                               A heading list breakpoint.                                                                               number | boolean                                                                                         false                                                                                                   
convert                                                                                                  (true | false | px | em | rem | rel | percent) If returned value should be unit converted or overridden. boolean | string                                                                                         true                                                                                                    
base-font-size                                                                                           Font size used for relative calculations.                                                                number                                                                                                   $th-base-font-size                                                                                      
======================================================================================================== ======================================================================================================== ======================================================================================================== ========================================================================================================

Returns
~~~~~~~

``number`` — The heading font size value.

Example
~~~~~~~

Return font size from a h1 heading map.

.. code-block:: scss

	th-property-font-size(h1)

Return font size from a h1 heading map with a breakpoint of 768px.

.. code-block:: scss

	th-property-font-size(
	  $heading: h1,
	  $breakpoint: 768px
	)

Return font size from a h1 heading map without unit conversion.

.. code-block:: scss

	th-property-font-size(
	  $heading: h1,
	  $convert: false
	)

Return font size from a h1 heading map and unit override to percent.

.. code-block:: scss

	th-property-font-size(
	  $heading: h1,
	  $convert: percent
	)

Return font size from a h1 with a base font size of 24px.

.. code-block:: scss

	th-property-font-size(
	  $heading: h1,
	  $base-font-size: 24px
	)

Requires
~~~~~~~~

* ``th-property``

Used By
~~~~~~~

* [mixin] ``th-heading``

Since
~~~~~

0.0.10

th-property-line-height
-----------------------

Since
~~~~~

0.0.10

Source
~~~~~~

.. code-block:: scss

	@function th-property-line-height($heading, $breakpoint: false, $convert: true, $base-font-size: $th-base-font-size) { 
	  @return th-property(
	    $heading: $heading,
	    $property-name: line-height,
	    $breakpoint: $breakpoint,
	    $convert: $convert,
	    $base-font-size: _th-property-base($heading, $breakpoint, $base-font-size)
	  );
	}

Description
~~~~~~~~~~~

Return heading line height value.

Parameters
~~~~~~~~~~

======================================================================================================== ======================================================================================================== ======================================================================================================== ========================================================================================================
Name                                                                                                     Description                                                                                              Type                                                                                                     Default Value                                                                                           
======================================================================================================== ======================================================================================================== ======================================================================================================== ========================================================================================================
heading                                                                                                  A heading map key or list.                                                                               list | string                                                                                                                                                                                                    
breakpoint                                                                                               A heading list breakpoint.                                                                               number | boolean                                                                                         false                                                                                                   
convert                                                                                                  (true | false | px | em | rem | rel | percent) If returned value should be unit converted or overridden. boolean | string                                                                                         true                                                                                                    
base-font-size                                                                                           Font size used for relative calculations.                                                                number                                                                                                   $th-base-font-size                                                                                      
======================================================================================================== ======================================================================================================== ======================================================================================================== ========================================================================================================

Returns
~~~~~~~

``number`` — The heading line height value.

Example
~~~~~~~

Return line height from a h1 heading map.

.. code-block:: scss

	th-property-line-height(h1)

Return line height from a h1 heading map with a breakpoint of 768px.

.. code-block:: scss

	th-property-line-height(
	  $heading: h1,
	  $breakpoint: 768px
	)

Return line height from a h1 heading map without unit conversion.

.. code-block:: scss

	th-property-line-height(
	  $heading: h1,
	  $convert: false
	)

Return line height from a h1 heading map and unit override to percent.

.. code-block:: scss

	th-property-line-height(
	  $heading: h1,
	  $convert: percent
	)

Return line height from a h1 with a base font size of 24px.

.. code-block:: scss

	th-property-line-height(
	  $heading: h1,
	  $base-font-size: 24px
	)

Requires
~~~~~~~~

* ``th-property``

Since
~~~~~

0.0.10

th-property-margin-top
----------------------

Since
~~~~~

0.0.10

Source
~~~~~~

.. code-block:: scss

	@function th-property-margin-top($heading, $breakpoint: false, $convert: true, $base-font-size: $th-base-font-size) { 
	  @return th-property(
	    $heading: $heading,
	    $property-name: margin-top,
	    $breakpoint: $breakpoint,
	    $convert: $convert,
	    $base-font-size: _th-property-base($heading, $breakpoint, $base-font-size)
	  );
	}

Description
~~~~~~~~~~~

Return heading margin top value.

Parameters
~~~~~~~~~~

======================================================================================================== ======================================================================================================== ======================================================================================================== ========================================================================================================
Name                                                                                                     Description                                                                                              Type                                                                                                     Default Value                                                                                           
======================================================================================================== ======================================================================================================== ======================================================================================================== ========================================================================================================
heading                                                                                                  A heading map key or list.                                                                               list | string                                                                                                                                                                                                    
breakpoint                                                                                               A heading list breakpoint.                                                                               number | boolean                                                                                         false                                                                                                   
convert                                                                                                  (true | false | px | em | rem | rel | percent) If returned value should be unit converted or overridden. boolean | string                                                                                         true                                                                                                    
base-font-size                                                                                           Font size used for relative calculations.                                                                number                                                                                                   $th-base-font-size                                                                                      
======================================================================================================== ======================================================================================================== ======================================================================================================== ========================================================================================================

Returns
~~~~~~~

``number`` — The heading margin top value.

Example
~~~~~~~

Return margin top from a h1 heading map.

.. code-block:: scss

	th-property-margin-top(h1)

Return margin top from a h1 heading map with a breakpoint of 768px.

.. code-block:: scss

	th-property-margin-top(
	  $heading: h1,
	  $breakpoint: 768px
	)

Return margin top from a h1 heading map without unit conversion.

.. code-block:: scss

	th-property-margin-top(
	  $heading: h1,
	  $convert: false
	)

Return margin top from a h1 heading map and unit override to percent.

.. code-block:: scss

	th-property-margin-top(
	  $heading: h1,
	  $convert: percent
	)

Return margin top from a h1 with a base font size of 24px.

.. code-block:: scss

	th-property-margin-top(
	  $heading: h1,
	  $base-font-size: 24px
	)

Requires
~~~~~~~~

* ``th-property``

Since
~~~~~

0.0.10

th-property-margin-bottom
-------------------------

Since
~~~~~

0.0.10

Source
~~~~~~

.. code-block:: scss

	@function th-property-margin-bottom($heading, $breakpoint: false, $convert: true, $base-font-size: $th-base-font-size) { 
	  @return th-property(
	    $heading: $heading,
	    $property-name: margin-bottom,
	    $breakpoint: $breakpoint,
	    $convert: $convert,
	    $base-font-size: _th-property-base($heading, $breakpoint, $base-font-size)
	  );
	}

Description
~~~~~~~~~~~

Return heading margin bottom value.

Parameters
~~~~~~~~~~

======================================================================================================== ======================================================================================================== ======================================================================================================== ========================================================================================================
Name                                                                                                     Description                                                                                              Type                                                                                                     Default Value                                                                                           
======================================================================================================== ======================================================================================================== ======================================================================================================== ========================================================================================================
heading                                                                                                  A heading map key or list.                                                                               list | string                                                                                                                                                                                                    
breakpoint                                                                                               A heading list breakpoint.                                                                               number | boolean                                                                                         false                                                                                                   
convert                                                                                                  (true | false | px | em | rem | rel | percent) If returned value should be unit converted or overridden. boolean | string                                                                                         true                                                                                                    
base-font-size                                                                                           Font size used for relative calculations.                                                                number                                                                                                   $th-base-font-size                                                                                      
======================================================================================================== ======================================================================================================== ======================================================================================================== ========================================================================================================

Returns
~~~~~~~

``number`` — The heading margin bottom value.

Example
~~~~~~~

Return margin bottom from a h1 heading map.

.. code-block:: scss

	th-property-margin-bottom(h1)

Return margin bottom from a h1 heading map with a breakpoint of 768px.

.. code-block:: scss

	th-property-margin-bottom(
	  $heading: h1,
	  $breakpoint: 768px
	)

Return margin bottom from a h1 heading map without unit conversion.

.. code-block:: scss

	th-property-margin-bottom(
	  $heading: h1,
	  $convert: false
	)

Return margin bottom from a h1 heading map and unit override to percent.

.. code-block:: scss

	th-property-margin-bottom(
	  $heading: h1,
	  $convert: percent
	)

Return margin bottom from a h1 with a base font size of 24px.

.. code-block:: scss

	th-property-margin-bottom(
	  $heading: h1,
	  $base-font-size: 24px
	)

Requires
~~~~~~~~

* ``th-property``

Since
~~~~~

0.0.10

th-property-default
-------------------

Since
~~~~~

0.0.10

Source
~~~~~~

.. code-block:: scss

	@function th-property-default($property-name, $convert: true, $base-font-size: $th-base-font-size) { 
	  $property: map-get($th-property-defaults, $property-name);
	  @if $convert == true {
	    $property: _th-property-unit-convert-property($property-name, $property, $base-font-size);
	  }
	  @return $property;
	}

Description
~~~~~~~~~~~

Return default property value.

Parameters
~~~~~~~~~~

======================================================================================================== ======================================================================================================== ======================================================================================================== ========================================================================================================
Name                                                                                                     Description                                                                                              Type                                                                                                     Default Value                                                                                           
======================================================================================================== ======================================================================================================== ======================================================================================================== ========================================================================================================
property-name                                                                                            (font-size | line-height | margin-top | margin-bottom | breakpoint) A property name.                     string                                                                                                                                                                                                           
convert                                                                                                  (true | false | px | em | rem | rel | percent) If returned value should be unit converted or overridden. boolean | string                                                                                         true                                                                                                    
base-font-size                                                                                           Font size used for relative calculations.                                                                number                                                                                                   $th-base-font-size                                                                                      
======================================================================================================== ======================================================================================================== ======================================================================================================== ========================================================================================================

Returns
~~~~~~~

``number`` — The default property value.

Example
~~~~~~~

Get default font size.

.. code-block:: scss

	th-property-default(font-size)

Requires
~~~~~~~~

* ``th-property-defaults``

Used By
~~~~~~~

* [function] ``th-property``

Since
~~~~~

0.0.10

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
	    $base-font-size: _th-property-base($heading, $breakpoint, $base-font-size);
	  }
	  @if th-list-has($_th-core-properties, $property-name) {
	    $breakpoint: _th-core-breakpoint-context($breakpoint);
	    #{$property-name}: th-property(
	      $property-name: $property-name,
	      $heading: $heading,
	      $breakpoint: $breakpoint,
	      $convert: $convert,
	      $base-font-size: $base-font-size
	    );
	  }
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

* [mixin] ``th-property-font-size``

* [mixin] ``th-property-line-height``

* [mixin] ``th-property-margin-top``

* [mixin] ``th-property-margin-bottom``

Since
~~~~~

0.0.14

th-property-font-size
---------------------

Since
~~~~~

0.0.10

Source
~~~~~~

.. code-block:: scss

	@mixin th-property-font-size($heading, $breakpoint: false, $convert: true, $base-font-size: $th-base-font-size) { 
	  $heading: th-heading($heading, $breakpoint);
	  @include th-property(
	    $property-name: font-size,
	    $heading: $heading,
	    $breakpoint: $breakpoint,
	    $convert: $convert,
	    $base-font-size: $base-font-size
	  );
	}

Description
~~~~~~~~~~~

Output heading font size styles.

Parameters
~~~~~~~~~~

=================================================================================================== =================================================================================================== =================================================================================================== ===================================================================================================
Name                                                                                                Description                                                                                         Type                                                                                                Default Value                                                                                      
=================================================================================================== =================================================================================================== =================================================================================================== ===================================================================================================
heading                                                                                             A heading map key.                                                                                  string                                                                                                                                                                                                 
breakpoint                                                                                          A heading list breakpoint.                                                                          number | boolean                                                                                    false                                                                                              
convert                                                                                             (false | px | em | rem | rel | percent) - If returned value should be unit converted or overridden. boolean | string                                                                                    true                                                                                               
base-font-size                                                                                      Font size used for relative calculations.                                                           number                                                                                              $th-base-font-size                                                                                 
=================================================================================================== =================================================================================================== =================================================================================================== ===================================================================================================

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

	@include th-property-font-size(
	  $heading: h1,
	  $convert: false
	)

Output h1 font size styles and unit override to percent.

.. code-block:: scss

	@include th-property-font-size(
	  $heading: h1,
	  $convert: percent
	)

Output h1 font size with a base font size of 24px.

.. code-block:: scss

	@include th-property-font-size(
	  $heading: h1,
	  $base-font-size: 24px
	)

Requires
~~~~~~~~

* ``th-property``

* ``th-heading``

Since
~~~~~

0.0.10

th-property-line-height
-----------------------

Since
~~~~~

0.0.10

Source
~~~~~~

.. code-block:: scss

	@mixin th-property-line-height($heading, $breakpoint: false, $convert: true, $base-font-size: $th-base-font-size) { 
	  $heading: th-heading($heading, $breakpoint);
	  $base-font-size: _th-property-base($heading, $breakpoint, $base-font-size);
	  @include th-property(
	    $property-name: line-height,
	    $heading: $heading,
	    $breakpoint: $breakpoint,
	    $convert: $convert,
	    $base-font-size: $base-font-size
	  );
	}

Description
~~~~~~~~~~~

Output heading line height styles.

Parameters
~~~~~~~~~~

================================================================================================= ================================================================================================= ================================================================================================= =================================================================================================
Name                                                                                              Description                                                                                       Type                                                                                              Default Value                                                                                    
================================================================================================= ================================================================================================= ================================================================================================= =================================================================================================
heading                                                                                           A heading map key.                                                                                string                                                                                                                                                                                             
breakpoint                                                                                        A heading list breakpoint.                                                                        number | boolean                                                                                  false                                                                                            
convert                                                                                           (false | px | em | rem | rel | percent) If returned value should be unit converted or overridden. boolean | string                                                                                  true                                                                                             
base-font-size                                                                                    Font size used for relative calculations.                                                         number                                                                                            $th-base-font-size                                                                               
================================================================================================= ================================================================================================= ================================================================================================= =================================================================================================

Example
~~~~~~~

Output h1 line height styles.

.. code-block:: scss

	@include th-property-line-height(h1)

Output h1 line height styles with 768px breakpoint.

.. code-block:: scss

	@include th-property-line-height(
	  $heading: h1,
	  $breakpoint: 768px
	)

Output h1 line height styles without unit conversion.

.. code-block:: scss

	@include th-property-line-height(
	  $heading: h1,
	  $convert: false
	)

Output h1 line height styles and unit override to percent.

.. code-block:: scss

	@include th-property-line-height(
	  $heading: h1,
	  $convert: percent
	)

Output h1 line height with a base font size of 24px.

.. code-block:: scss

	@include th-property-line-height(
	  $heading: h1,
	  $base-font-size: 24px
	)

Requires
~~~~~~~~

* ``th-property``

* ``th-heading``

Since
~~~~~

0.0.10

th-property-margin-top
----------------------

Since
~~~~~

0.0.10

Source
~~~~~~

.. code-block:: scss

	@mixin th-property-margin-top($heading, $breakpoint: false, $convert: true, $base-font-size: $th-base-font-size) { 
	  $heading: th-heading($heading, $breakpoint);
	  $base-font-size: _th-property-base($heading, $breakpoint, $base-font-size);
	  @include th-property(
	    $property-name: margin-top,
	    $heading: $heading,
	    $breakpoint: $breakpoint,
	    $convert: $convert,
	    $base-font-size: $base-font-size
	  );
	}

Description
~~~~~~~~~~~

Output heading margin top styles.

Parameters
~~~~~~~~~~

================================================================================================= ================================================================================================= ================================================================================================= =================================================================================================
Name                                                                                              Description                                                                                       Type                                                                                              Default Value                                                                                    
================================================================================================= ================================================================================================= ================================================================================================= =================================================================================================
heading                                                                                           A heading map key.                                                                                string                                                                                                                                                                                             
breakpoint                                                                                        A heading list breakpoint.                                                                        number | boolean                                                                                  false                                                                                            
convert                                                                                           (false | px | em | rem | rel | percent) If returned value should be unit converted or overridden. boolean | string                                                                                  true                                                                                             
base-font-size                                                                                    Font size used for relative calculations.                                                         number                                                                                            $th-base-font-size                                                                               
================================================================================================= ================================================================================================= ================================================================================================= =================================================================================================

Example
~~~~~~~

Output h1 margin top styles.

.. code-block:: scss

	@include th-property-margin-top(h1)

Output h1 margin top styles with 768px breakpoint.

.. code-block:: scss

	@include th-property-margin-top(
	  $heading: h1,
	  $breakpoint: 768px
	)

Output h1 margin top styles without unit conversion.

.. code-block:: scss

	@include th-property-margin-top(
	  $heading: h1,
	  $convert: false
	)

Output h1 margin top styles and unit override to percent.

.. code-block:: scss

	@include th-property-margin-top(
	  $heading: h1,
	  $convert: percent
	)

Output h1 margin top with a base font size of 24px.

.. code-block:: scss

	@include th-property-margin-top(
	  $heading: h1,
	  $base-font-size: 24px
	)

Requires
~~~~~~~~

* ``th-property``

* ``th-heading``

Since
~~~~~

0.0.10

th-property-margin-bottom
-------------------------

Since
~~~~~

0.0.10

Source
~~~~~~

.. code-block:: scss

	@mixin th-property-margin-bottom($heading, $breakpoint: false, $convert: true, $base-font-size: $th-base-font-size) { 
	  $heading: th-heading($heading, $breakpoint);
	  $base-font-size: _th-property-base($heading, $breakpoint, $base-font-size);
	  @include th-property(
	    $property-name: margin-bottom,
	    $heading: $heading,
	    $breakpoint: $breakpoint,
	    $convert: $convert,
	    $base-font-size: $base-font-size
	  );
	}

Description
~~~~~~~~~~~

Output heading margin bottom styles.

Parameters
~~~~~~~~~~

================================================================================================= ================================================================================================= ================================================================================================= =================================================================================================
Name                                                                                              Description                                                                                       Type                                                                                              Default Value                                                                                    
================================================================================================= ================================================================================================= ================================================================================================= =================================================================================================
heading                                                                                           A heading map key.                                                                                string                                                                                                                                                                                             
breakpoint                                                                                        A heading list breakpoint.                                                                        number | boolean                                                                                  false                                                                                            
convert                                                                                           (false | px | em | rem | rel | percent) If returned value should be unit converted or overridden. boolean | string                                                                                  true                                                                                             
base-font-size                                                                                    Font size used for relative calculations.                                                         number                                                                                            $th-base-font-size                                                                               
================================================================================================= ================================================================================================= ================================================================================================= =================================================================================================

Example
~~~~~~~

Output h1 margin bottom styles.

.. code-block:: scss

	@include th-property-margin-bottom(h1)

Output h1 margin bottom styles with 768px breakpoint.

.. code-block:: scss

	@include th-property-margin-bottom(
	  $heading: h1,
	  $breakpoint: 768px
	)

Output h1 margin bottom styles without unit conversion.

.. code-block:: scss

	@include th-property-margin-bottom(
	  $heading: h1,
	  $convert: false
	)

Output h1 margin bottom styles and unit override to percent.

.. code-block:: scss

	@include th-property-margin-bottom(
	  $heading: h1,
	  $convert: percent
	)

Output h1 margin bottom with a base font size of 24px.

.. code-block:: scss

	@include th-property-margin-bottom(
	  $heading: h1,
	  $base-font-size: 24px
	)

Requires
~~~~~~~~

* ``th-property``

* ``th-heading``

Since
~~~~~

0.0.10