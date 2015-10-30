Config
======

th-base-font-size
-----------------

Since
~~~~~

0.0.10

Source
~~~~~~

.. code-block:: scss

	$th-base-font-size: 16px

Description
~~~~~~~~~~~

Font size used for relative calculations.

Type
~~~~

``Number``

Used By
~~~~~~~

Since
~~~~~

0.0.10

th-rem-base
-----------

Since
~~~~~

0.0.14

Source
~~~~~~

.. code-block:: scss

	$th-rem-base: $th-base-font-size

Description
~~~~~~~~~~~

Font size base for calculating rem units.

Type
~~~~

``Number``

Used By
~~~~~~~

Since
~~~~~

0.0.14

th-headings
-----------

Since
~~~~~

0.0.10

Source
~~~~~~

.. code-block:: scss

	$th-headings: ()

Description
~~~~~~~~~~~

Sets of headings.

Type
~~~~

``Map``

Example
~~~~~~~

Defining a few sets of headings.

.. code-block:: scss

	$th-headings: (
	  h1: (32px 38px 20px, 38px 42px 30px 768px),
	  h2: (24px 30px, 32px 36px default 768px),
	  h3: (18px 24px (10px 20px), 21px 26px 30px 768px)
	);

Used By
~~~~~~~

* [function] ``th-heading-get-map``

Since
~~~~~

0.0.10

th-property-defaults
--------------------

Since
~~~~~

0.0.10

Source
~~~~~~

.. code-block:: scss

	$th-property-defaults: (
	  font-size: 16px,
	  line-height: 24px,
	  margin-top: 20px,
	  margin-bottom: 20px
	)

Description
~~~~~~~~~~~

Default property values for headings.

Type
~~~~

``Map``

Map Structure
~~~~~~~~~~~~~

================================== ================================== ================================== ==================================
Name                               Description                        Type                               Default Value                     
================================== ================================== ================================== ==================================
font-size                          Default font size for headings     number                             16px                              
line-height                        Default line height for headings   number                             24px                              
margin-top                         Default margin top for headings    number                             20px                              
margin-bottom                      Default margin bottom for headings number                             20px                              
================================== ================================== ================================== ==================================

Used By
~~~~~~~

Since
~~~~~

0.0.10

th-property-units
-----------------

Since
~~~~~

0.0.11

Source
~~~~~~

.. code-block:: scss

	$th-property-units: (
	  font-size: false,
	  line-height: false,
	  margin-top: false,
	  margin-bottom: false
	)

Description
~~~~~~~~~~~

Units for heading properties.

Type
~~~~

``Map``

Map Structure
~~~~~~~~~~~~~

===================================================================== ===================================================================== ===================================================================== =====================================================================
Name                                                                  Description                                                           Type                                                                  Default Value                                                        
===================================================================== ===================================================================== ===================================================================== =====================================================================
font-size                                                             (px | em | rem | rel | percent) - Unit conversion for font sizes.     boolean | string                                                      false                                                                
line-height                                                           (px | em | rem | rel | percent) - Unit conversion for line heights.   boolean | string                                                      false                                                                
margin-top                                                            (px | em | rem | rel | percent) - Unit conversion for top margins.    boolean | string                                                      false                                                                
margin-bottom                                                         (px | em | rem | rel | percent) - Unit conversion for bottom margins. boolean | string                                                      false                                                                
===================================================================== ===================================================================== ===================================================================== =====================================================================

Example
~~~~~~~

Defining units for heading properties.

.. code-block:: scss

	$th-property-units: (
	  font-size: percent,
	  line-height: rel,
	  margin-top: em,
	  margin-bottom: em
	)

Used By
~~~~~~~

Since
~~~~~

0.0.11