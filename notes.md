# MAIN POINTS
	- client side rendering
	- server side rendering
	- incremental static generation
	- dynamic route static generation
	- built-in routing
	- dynamic routing
	- pros and cons

	- SSR -> getServerSideProps()
	- SSG -> getStaticProps()
	- ISG -> getStaticProps() with revalidate
	- Dynamic Routing -> getStaticPaths()
	- CSR -> classic ol' React

# Pros & Cons
## Pros
	- Built-in routing
	- Supports static generation and server side rendering out of the box
	- Faster compiler built with Rust
	- Improved DX with errors on the web page during development
	- Improved DX as compilation occurs on per page basis
	- Extra NextJS components/functions such as NextJS' Image component
	- Has built-in API and Middleware functions

## Cons
	- Certain libraries/packages may not support server side rendering
	- Hydration errors may confuse new server side developers