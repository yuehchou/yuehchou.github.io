function [M, x, r] = least_square( A, b )
    [m , n] = size(A);
    %% Construct M
    M = [eye(m) A; A.' zeros(n)];
    %% Solving the block system
    sol = M \ [b;zeros(n,1)];
    r = sol(1:m,1);
    x = sol(m+1:m+n,1);
end