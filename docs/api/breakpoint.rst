Breakpoint
==========

th-breakpoint
-------------

Since
~~~~~

0.0.10

Source
~~~~~~

.. code-block:: scss

	@mixin th-breakpoint($query, $breakpoint: false) { 
	  @if variable-exists('breakpoint') and mixin-exists('breakpoint') {
	    @include breakpoint($query) {
	      @include th-with-breakpoint($breakpoint) {
	        @content;
	      }
	    }
	  } @else {
	    @warn 'th-breakpoint requires the Breakpoint gem - https://github.com/at-import/breakpoint';
	  }
	}

Description
~~~~~~~~~~~

Output styles with a breakpoint within a media query. Requires the
Breakpoint gem (https://github.com/at-import/breakpoint).

Parameters
~~~~~~~~~~

======================================================================================== ======================================================================================== ======================================================================================== ========================================================================================
Name                                                                                     Description                                                                              Type                                                                                     Default Value                                                                           
======================================================================================== ======================================================================================== ======================================================================================== ========================================================================================
query                                                                                    Media query to parse (https://github.com/at-import/breakpoint/wiki/Basic-Media-Queries). list                                                                                                                                                                             
breakpoint                                                                               A heading list breakpoint.                                                               number | boolean                                                                         false                                                                                   
======================================================================================== ======================================================================================== ======================================================================================== ========================================================================================

Content
~~~~~~~

This mixin allows extra content to be passed (through the ``@content`` directive).

Output
~~~~~~

Styles to output within the breakpoint.

Example
~~~~~~~

Output a heading with a 768px within a 768px min-width media query.

.. code-block:: scss

	@include th-breakpoint(min-width 768px, 768px) {
	  @include th-heading(h1);
	}

Throws
~~~~~~

* th-breakpoint() requires the Breakpoint gem - https://github.com/at-import/breakpoint

Requires
~~~~~~~~

* ``th-with-breakpoint``

Used By
~~~~~~~

Since
~~~~~

0.0.10