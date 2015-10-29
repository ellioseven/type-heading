Core
====

th-core-context-get
-------------------

Since
~~~~~

0.0.15

Source
~~~~~~

.. code-block:: scss

	@function th-core-context-get($context, $value) { 
	  @if global_variable_exists('_th-core-contexts') and map-get($_th-core-contexts, $context) {
	    @return map-get($_th-core-contexts, $context);
	  } @else {
	    @return $value;
	  }
	}

Description
~~~~~~~~~~~

Check and get contextual value from globals.

Parameters
~~~~~~~~~~

=========================================== =========================================== =========================================== ===========================================
Name                                        Description                                 Type                                        Default Value                              
=========================================== =========================================== =========================================== ===========================================
context                                     [heading | breakpoint] Context property.    string                                                                                 
value                                       The original value of the context property. mixed                                                                                  
=========================================== =========================================== =========================================== ===========================================

Returns
~~~~~~~

``mixed`` — Contextual value from globals or passed value.

Example
~~~~~~~

Return contextual breakpoint value.

.. code-block:: scss

	_th-core-context-get(breakpoint, 768px)
	// 1024px

Requires
~~~~~~~~

Used By
~~~~~~~

* [function] ``th-heading``

* [mixin] ``th-heading``

* [mixin] ``th-headings``

Since
~~~~~

0.0.15

th-core-context-set
-------------------

Since
~~~~~

0.0.15

Source
~~~~~~

.. code-block:: scss

	@mixin th-core-context-set($context, $value) { 
	  $cache: $_th-core-contexts;
	  $_th-core-contexts: th-map-set($_th-core-contexts, $context, $value) !global;
	  @content;
	  $_th-core-contexts: $cache !global;
	}

Description
~~~~~~~~~~~

Set contextual value to globals.

Parameters
~~~~~~~~~~

======================================== ======================================== ======================================== ========================================
Name                                     Description                              Type                                     Default Value                           
======================================== ======================================== ======================================== ========================================
context                                  [heading | breakpoint] Context property. string                                                                           
value                                    The new value of the context property.   mixed                                                                            
======================================== ======================================== ======================================== ========================================

Content
~~~~~~~

This mixin allows extra content to be passed (through the ``@content`` directive).

Role: [Output with context]

Example
~~~~~~~

Set contextual breakpoint value.

.. code-block:: scss

	_th-core-context-set(breakpoint, 768px)

Requires
~~~~~~~~

Used By
~~~~~~~

* [mixin] ``th-breakpoint-context``

* [mixin] ``th-heading-context``

Since
~~~~~

0.0.15