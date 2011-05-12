# Wator, AMD style

This project isn't very much. It's simply an excuse for me to play with AMD
modules and the CommonJS package format.

## What is AMD?

While you can visit http://wiki.commonjs.org/wiki/Modules/AsynchronousDefinition
for a lot more detail, basically it's a means of creating JavaScript modules,
which can have dependencies. JS currently has no native module or dependency
formats, and AMD is the current popular suggestion. It's also kind of spiffy.

## What is wator?

There's a decent description at http://seed7.sourceforge.net/scrshots/wator.htm
but in essence, it's a very simple predator-prey model.

## Why'd you pick wator as an experiment?

It's something I've used in the past to dabble in other languages. It's a
fairly simple system conceptually, but it leans on a couple of 'traditional'
computer science concepts, in that it can be fairly easily implemented using
an OOP style of approach.

However, in particular I chose it because I wanted to also experiment a bit
with packages, which gives me a bit of a place to practice separation of
concerns.

For example, right now I'm creating a watorEngine CommonJS package that will
handle the actual data and simulation elements. I'll then be creating
something like watorRenderDOM that will render out using basic DOM structures,
and perhaps a watorRenderCanvas that uses a canvas instead. Both will be able
to easily lean on the engine underneath - clean separation of concerns.

## Why did you use a series of questions?

I don't know, it felt like the right thing to do. Anyways, that's that. It's a
very basic example (that I'm making public before it does *anything* except a
bunch of console.log statements to verify functionality), and I hope to be
able to write up my experiences into some simple "This is how to get started"
posts or something later.
