var documenterSearchIndex = {"docs":
[{"location":"#RandomExtensions","page":"RandomExtensions","title":"RandomExtensions","text":"","category":"section"},{"location":"","page":"RandomExtensions","title":"RandomExtensions","text":"Most of the \"documentation\" is still in the README. Here is the updated docstring for rand:","category":"page"},{"location":"","page":"RandomExtensions","title":"RandomExtensions","text":"rand","category":"page"},{"location":"#Base.rand","page":"RandomExtensions","title":"Base.rand","text":"rand([rng=GLOBAL_RNG], [S], [C...]) # RandomExtensions\n\nPick a random element or collection of random elements from the set of values specified by S; S can be\n\nan indexable collection (for example 1:n or ['x','y','z']),\nan AbstractDict or AbstractSet object,\na string (considered as a collection of characters), or\na type: the set of values to pick from is then equivalent to typemin(S):typemax(S) for integers (this is not applicable to BigInt, and to 0 1) for floating point numbers;\na Distribution object, e.g. Normal() for a normal distribution (like randn()), or CloseOpen(10.0, 20.0) for uniform Float64 numbers in the range 100 200);\na make object, which can be e.g. make(Pair, S1, S2) or make(Complex, S1, S2), where S1 and S2 are one of the specifications above; Pair or Complex can optionally be given as concrete types, e.g. make(ComplexF64, 1:3, Int) to generate ComplexF64 instead of Complex{Int}.\n\nS usually defaults to Float64.\n\nIf C... is not specified, rand produces a scalar. Otherwise, C can be:\n\na set of integers, or a tuple of Int, which specify the dimensions of an Array to generate;\n(Array, dims...): same as above, but with Array specified explicitely;\n(p::AbstractFloat, m::Integer, [n::Integer]), which produces a sparse array of dimensions (m, n), in which the probability of any element being nonzero is independently given by p;\n(String, [n=8]), which produces a random String of length n; the generated string consists of Char taken from a predefined set like randstring, and can be specified with the S parameter;\n(Dict, n), which produces a Dict of length n; if Dict is given without type parameters, then S must be specified;\n(Set, n) or (BitSet, n), which produces a set of length n;\n(BitArray, dims...), which produces a BitArray with the specified dimensions.\n\nFor Array, Dict and Set, a less abstract type can be specified, e.g. Set{Float64}, to force the type of the result regardless of the S parameter. In particular, in the absence of S, the type parameter(s) of the container play the role of S; for example, rand(Dict{Int,Float64}, n) is equivalent to rand(make(Pair, Int, Float64), Dict, n).\n\nExamples\n\njulia> rand(Int, 2)\n2-element Array{Int64,1}:\n 1339893410598768192\n 1575814717733606317\n\njulia> rand(MersenneTwister(0), Dict(1=>2, 3=>4))\n1=>2\n\njulia> rand(\"abc\", String, 12)\n\"bccaacaabaac\"\n\njulia> rand(1:10, Set, 3)\nSet([3, 8, 6])\n\njulia> rand(1:10, Set{Float64}, 3)\nSet([10.0, 5.0, 6.0])\n\nnote: Note\nThe complexity of rand(rng, s::Union{AbstractDict,AbstractSet}) is linear in the length of s, unless an optimized method with constant complexity is available, which is the case for Dict, Set and BitSet. For more than a few calls, use rand(rng, collect(s)) instead, or either rand(rng, Dict(s)) or rand(rng, Set(s)) as appropriate.\n\n\n\n\n\n","category":"function"}]
}
