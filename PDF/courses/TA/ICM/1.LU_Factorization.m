function [L,U] = lufact2(A)
n = length(A);
L = zeros(n);
At = A.';

for k = 1:n-1
    L(k+1:n,k) = At(k+1:n,k) / At(k,k);
    At(k+1:n,k:n) = At(k+1:n,k:n) - L(k+1:n,k)*At(k,k:n);
    At(k+1:n,k) = L(k+1:n,k);
end

L = triu(At).';
U = tril(At,-1).' + diag(ones(n,1));
end